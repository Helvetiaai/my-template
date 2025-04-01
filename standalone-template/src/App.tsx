import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  TextField, 
  Stack, 
  Snackbar, 
  Alert,
  useTheme
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (email) {
      setSnackbarOpen(true);
      setEmail('');
      setSubmitted(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: theme.palette.primary.main
        }}>
          <RocketLaunchIcon fontSize="large" />
          My Solo Dev Template
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Built with Material UI for speed, simplicity, and working code
        </Typography>

        <Card sx={{ mt: 4, mb: 4, p: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Get Started Quickly
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              This template includes standalone HTML mode and Material UI components.
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={submitted && !email}
                  helperText={submitted && !email ? 'Email is required' : ''}
                />
                
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                >
                  Subscribe for Updates
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="outlined">Documentation</Button>
          <Button variant="outlined" color="secondary">Examples</Button>
        </Box>
      </Box>
      
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={6000} 
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thanks for subscribing!
        </Alert>
      </Snackbar>
    </Container>
  );
}
