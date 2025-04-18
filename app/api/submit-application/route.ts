import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    console.log('API received form data:', {
      personalInfo: formData.personalInfo,
      resume: formData.resume?.fileUrl,
      behavioral: {
        textAnswer: formData.behavioral?.textAnswer,
        audioFileUrl: formData.behavioral?.audioFileUrl,
        videoFileUrl: formData.behavioral?.videoFileUrl
      }
    });
    
    if (!formData || !formData.personalInfo) {
      console.error('Invalid form data:', formData);
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }
    
    // Force the text answer to be used, checking all possible paths it might be in
    const textAnswer = 
      formData.behavioral?.textAnswer || 
      formData.submissionData?.behavioral?.textAnswer || 
      formData.behavioralAnswer || 
      '';
      
    // Force file URLs to be used, checking all possible paths
    const audioFileUrl = 
      formData.behavioral?.audioFileUrl || 
      formData.submissionData?.behavioral?.audioFileUrl || 
      formData.audioResponseUrl || 
      null;
      
    const videoFileUrl = 
      formData.behavioral?.videoFileUrl || 
      formData.submissionData?.behavioral?.videoFileUrl || 
      formData.videoResponseUrl || 
      null;
    
    // Log the actual values we're going to use
    console.log('Extracted values:', { textAnswer, audioFileUrl, videoFileUrl });
    
    // Prepare data object
    const candidateData = {
      name: formData.personalInfo.name || '',
      email: formData.personalInfo.email || '',
      phone: formData.personalInfo.phone || '',
      resumeUrl: formData.resume?.fileUrl || null,
      behavioralAnswer: textAnswer === '' ? null : textAnswer,
      audioResponseUrl: audioFileUrl,
      videoResponseUrl: videoFileUrl,
    };
    
    console.log('Saving to database:', JSON.stringify(candidateData, null, 2));
    
    // Create a new candidate record in the database
    const candidate = await prisma.candidate.create({
      data: candidateData
    });
    
    console.log('Created candidate:', candidate);
    
    return NextResponse.json({ 
      success: true, 
      id: candidate.id,
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error saving application:', error);
    
    // Return more detailed error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to save application', details: errorMessage },
      { status: 500 }
    );
  }
} 