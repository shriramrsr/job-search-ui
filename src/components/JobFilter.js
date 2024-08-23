import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));

function JobFilter({ onFilterChange }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <StyledFormControl variant="outlined" fullWidth>
          <InputLabel id="job-type-label">Job Type</InputLabel>
          <Select
            labelId="job-type-label"
            id="job-type"
            onChange={(e) => onFilterChange('jobType', e.target.value)}
            label="Job Type"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value="full-time">Full-time</MenuItem>
            <MenuItem value="part-time">Part-time</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
          </Select>
        </StyledFormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledFormControl variant="outlined" fullWidth>
          <InputLabel id="experience-label">Experience Level</InputLabel>
          <Select
            labelId="experience-label"
            id="experience"
            onChange={(e) => onFilterChange('experience', e.target.value)}
            label="Experience Level"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value="entry">Entry Level</MenuItem>
            <MenuItem value="mid">Mid Level</MenuItem>
            <MenuItem value="senior">Senior Level</MenuItem>
          </Select>
        </StyledFormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledFormControl variant="outlined" fullWidth>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            onChange={(e) => onFilterChange('location', e.target.value)}
            label="Location"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">On-site</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </StyledFormControl>
      </Grid>
    </Grid>
  );
}

export default JobFilter;