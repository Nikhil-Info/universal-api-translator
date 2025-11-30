import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
    try {
        const { inputSpec, inputFormat, outputFormat } = await request.json()

        if (!inputSpec || !inputFormat || !outputFormat) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.' },
                { status: 500 }
            )
        }

        // Instantiate OpenAI client at runtime, not at build time
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        })

        const formatNames: Record<string, string> = {
            openapi: 'OpenAPI 3.0',
            graphql: 'GraphQL Schema',
            soap: 'SOAP/WSDL',
            grpc: 'gRPC Protocol Buffers',
        }

        const prompt = `You are an expert API specification converter. Convert the following ${formatNames[inputFormat]} specification to ${formatNames[outputFormat]}.

Input Specification (${formatNames[inputFormat]}):
${inputSpec}

Please provide ONLY the converted ${formatNames[outputFormat]} specification without any explanations or markdown formatting. Ensure the conversion is accurate and maintains all endpoints, parameters, and data structures.`

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert API specification converter. You convert between OpenAPI, GraphQL, SOAP/WSDL, and gRPC formats with high accuracy. Always output only the converted specification without explanations.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.3,
            max_tokens: 4000,
        })

        const convertedSpec = completion.choices[0]?.message?.content || ''

        return NextResponse.json({
            success: true,
            convertedSpec,
            inputFormat,
            outputFormat,
        })
    } catch (error: any) {
        console.error('API Conversion Error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to convert API specification' },
            { status: 500 }
        )
    }
}
