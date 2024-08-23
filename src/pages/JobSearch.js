import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import JobFilter from '../components/JobFilter';

const SearchForm = styled('form')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const JobCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[5],
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const JobButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    experience: '',
    location: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    console.log('Filters:', filters);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  // Mock job data
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
    { id: 2, title: 'Data Scientist', company: 'Data Inc', location: 'New York, NY' },
    { id: 3, title: 'Product Manager', company: 'Innovate LLC', location: 'Seattle, WA' },
    { id: 4, title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote' },
    { id: 5, title: 'Backend Developer', company: 'API Experts', location: 'Chicago, IL' },
    { id: 6, title: 'UX Designer', company: 'Creative Studio', location: 'Los Angeles, CA' },
    { id: 7, title: 'DevOps Engineer', company: 'CloudOps', location: 'Austin, TX' },
    { id: 8, title: 'Business Analyst', company: 'Finance Inc', location: 'Boston, MA' },
    { id: 9, title: 'Project Manager', company: 'Agile Masters', location: 'Denver, CO' },
    { id: 10, title: 'Mobile Developer', company: 'App Creators', location: 'Orlando, FL' },
    { id: 11, title: 'Full Stack Developer', company: 'Tech World', location: 'Remote' },
    { id: 12, title: 'AI Specialist', company: 'AI Innovations', location: 'Palo Alto, CA' },
  ];

  // Filtered jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ py: 4 }}>
      <SearchForm onSubmit={handleSearch}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Search jobs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </SearchForm>
      <JobFilter onFilterChange={handleFilterChange} />
      <Grid container spacing={4}>
        {filteredJobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <JobCard>
              <CardContent>
                <JobTitle gutterBottom variant="h5" component="h2">
                  {job.title}
                </JobTitle>
                <Typography>{job.company}</Typography>
                <Typography color="text.secondary">{job.location}</Typography>
              </CardContent>
              <JobButton component={Link} to={`/job/${job.id}`} color="primary">
                View Details
              </JobButton>
            </JobCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default JobSearch;
