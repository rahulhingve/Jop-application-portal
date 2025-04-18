/**
 * Converts a file to a base64 string representation
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Saves a file to the server's public/uploads directory using the API
 */
export const saveFile = async (file: File): Promise<string> => {
  try {
    // 1. Generate a unique filename to avoid collisions
    const timestamp = Date.now();
    const safeFilename = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const uniqueFilename = `${timestamp}_${safeFilename}`;
    
    // Convert file to base64 for transmission
    const base64Data = await fileToBase64(file);
    
    // 2. Send the file to our API endpoint
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: uniqueFilename,
        data: base64Data,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload file to server');
    }
    
    const result = await response.json();
    
    // 3. Return the URL to access the file
    return result.fileUrl;
  } catch (error) {
    console.error('Error saving file:', error);
    throw new Error('Failed to save file');
  }
};

/**
 * Retrieves a file by its URL
 * For files in public directory, we can access them directly
 * This function is kept for backward compatibility
 */
export const getFileByUrl = (url: string): string | null => {
  try {
    // For files stored in public directory, they can be accessed directly by URL
    // But for local testing and compatibility, we'll still check localStorage
    const storageKey = `file_/public${url}`;
    return localStorage.getItem(storageKey);
  } catch (error) {
    console.error('Error retrieving file:', error);
    return null;
  }
};

/**
 * Returns the mime type from a base64 string
 */
export const getMimeTypeFromBase64 = (base64: string): string => {
  const matches = base64.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9.+-]+);base64,/);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return 'application/octet-stream'; // default mime type
}; 