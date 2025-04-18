import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

// Function to extract the base64 data
function extractBase64Data(dataUrl: string): { mimeType: string, data: Buffer } {
  const matches = dataUrl.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9.+-]+);base64,(.*)$/);
  if (!matches || matches.length !== 3) {
    throw new Error('Invalid base64 data');
  }
  
  const mimeType = matches[1];
  const base64Data = matches[2];
  const buffer = Buffer.from(base64Data, 'base64');
  
  return { mimeType, data: buffer };
}

export async function POST(request: Request) {
  try {
    const { filename, data } = await request.json();
    
    if (!filename || !data) {
      return NextResponse.json(
        { error: 'Filename and data are required' },
        { status: 400 }
      );
    }
    
    // Extract the actual binary data from the base64 string
    const { data: fileBuffer } = extractBase64Data(data);
    
    // Define the upload directory and file path
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(uploadDir, filename);
    
    // Write the file to disk
    await writeFile(filePath, fileBuffer);
    
    // Return the public URL for the file
    const fileUrl = `/uploads/${filename}`;
    
    return NextResponse.json({ 
      success: true, 
      fileUrl,
      message: 'File uploaded successfully' 
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json(
      { error: 'Failed to process file upload' },
      { status: 500 }
    );
  }
} 