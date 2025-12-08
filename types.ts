import React from 'react';

export interface PricingTier {
  level: number;
  price: number;
  status: 'sold_out' | 'active' | 'locked';
  slotsRemaining?: number;
  totalSlots?: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AuditDemoRequest {
  url: string;
  focusArea: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}