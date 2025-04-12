// Frontend specific interfaces (can be subset of backend)

// Structure for displaying speaker WPM data received from backend
export interface SpeakerWPM {
    id: string; // e.g., "Speaker_A"
    avg_wpm: number;
    total_words?: number; // Optional details
    total_duration_s?: number; // Optional details
}

// Structure for sending target WPM data to backend
export interface TargetWPM {
    id: string; // Speaker ID matching SpeakerWPM (e.g., "Speaker_A")
    target_wpm: number;
}

// Type for tracking job status in the frontend
export type JobStatus =
  | 'IDLE'
  | 'UPLOADING'
  | 'PROCESSING_UPLOAD_CLOUD' // Or generic PROCESSING if preferred
  | 'PROCESSING_CLOUD_ANALYSIS'
  | 'PROCESSING_WPM_CALCULATION'
  | 'READY_FOR_INPUT'
  | 'QUEUED_FOR_ADJUSTMENT'
  | 'PROCESSING_ADJUSTMENT'
  | 'PROCESSING_RECONSTRUCTION'
  | 'COMPLETE'
  | 'FAILED';