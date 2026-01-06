import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // Modal endpoint - using the new one provided by the user
        const modalUrl = "https://ashkan-samali2--ai-image-detector-ensemble-fastapi-app.modal.run/detect";

        const backendFormData = new FormData();
        backendFormData.append('file', file);

        const response = await fetch(modalUrl, {
            method: "POST",
            body: backendFormData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            try {
                const errorJson = JSON.parse(errorText);
                return NextResponse.json(errorJson, { status: response.status });
            } catch {
                return NextResponse.json({ error: errorText || "Upstream error" }, { status: response.status });
            }
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
