import { styled } from '@mui/material/styles';

// Card Container
export const Card = styled('div')(({ theme, customProps }) => ({
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 16,
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
  },
  ...customProps
}));

export const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 8,
});

export const Title = styled('h3')({
  fontSize: 18,
  fontWeight: 600,
  color: '#1f2937',
});

export const StatusBadge = styled('span')(({ status }) => {
  const colors = {
    Pending: {
      bg: '#FEF3C7',
      text: '#92400E',
    },
    'In Progress': {
      bg: '#DBEAFE',
      text: '#1E40AF',
    },
    Completed: {
      bg: '#D1FAE5',
      text: '#065F46',
    },
  };

  const current = colors[status] || {
    bg: '#F3F4F6',
    text: '#374151',
  };

  return {
    padding: '4px 12px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: current.bg,
    color: current.text,
  };
});

export const Description = styled('p')({
  fontSize: 14,
  color: '#4b5563',
  marginBottom: 12,
});

export const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DateWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const DueDate = styled('span')(({ overdue }) => ({
  fontSize: 14,
  color: overdue ? '#DC2626' : '#6B7280',
  fontWeight: overdue ? 500 : 400,
}));

export const OverdueText = styled('span')({
  fontSize: 12,
  color: '#DC2626',
  fontWeight: 500,
});

export const ButtonGroup = styled('div')({
  display: 'flex',
  gap: 8,
});

export const ActionButton = styled('button')(({ variant }) => ({
  padding: '4px 12px',
  borderRadius: 6,
  fontSize: 14,
  border: 'none',
  cursor: 'pointer',
  color: '#fff',
  backgroundColor: variant === 'edit' ? '#3B82F6' : '#EF4444',
  '&:hover': {
    backgroundColor: variant === 'edit' ? '#2563EB' : '#DC2626',
  },
}));
