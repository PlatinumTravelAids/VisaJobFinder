// Sample JavaScript to handle form and fetch jobs
document.getElementById('candidate-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from reloading the page

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const jobRole = document.getElementById('job-role').value;
  const skills = document.getElementById('skills').value;
  const location = document.getElementById('location').value;

  // Fetch visa sponsorship jobs (using a dummy API for now)
  fetchconst apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.adzuna.com/v1/api/jobs/schengen/search/1?app_id=YOUR_APP_ID&app_key=YOUR_API_KEY&results_per_page=10&what=Painter,Cleaner,Caregiving';
=YOUR_APP_ID&app_key=YOUR_API_KEY&results_per_page=10&what=${jobRole}`)
    .then(response => response.json())
    .then(data => {
      // Display top 10 jobs
      const jobList = document.getElementById('job-list');
      jobList.innerHTML = ''; // Clear previous results

      data.results.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong> - ${job.company.display_name}<br>
        <a href="${job.redirect_url}" target="_blank">Apply here</a>`;
        jobList.appendChild(li);
      });
    })
    .catch(error => console.log('Error fetching jobs:', error));
});
