import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import jsPDF from 'jspdf';

const Form = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Resume', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.text(`Full Name: ${formData.fullName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text('Education:', 20, 80);
    doc.text(formData.education, 20, 90);
    doc.text('Work Experience:', 20, 110);
    doc.text(formData.experience, 20, 120);
    doc.text('Skills:', 20, 140);
    doc.text(formData.skills, 20, 150);

    // Save the PDF
    doc.save(`${formData.fullName}_Resume.pdf`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Education"
              name="education"
              multiline
              rows={4}
              value={formData.education}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Work Experience"
              name="experience"
              multiline
              rows={4}
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Skills"
              name="skills"
              multiline
              rows={4}
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Generate Resume
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default ResumeBuilder;
