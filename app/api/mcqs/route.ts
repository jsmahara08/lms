import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/lib/db';
import MCQ from '@/models/MCQ';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId');
    
    await connectDB();
    
    let query = courseId ? { courseId } : {};
    const mcqs = await MCQ.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json(mcqs);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const mcqData = await req.json();
    await connectDB();
    
    const mcq = await MCQ.create(mcqData);
    
    return NextResponse.json(mcq, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}