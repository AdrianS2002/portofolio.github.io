document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Fetch the JSON data
        const response = await fetch('myprojects.json');
        const data = await response.json();

        // Get the container element
        const projectsContainer = document.getElementById('projects-container');

        // Loop through each project in the JSON data
        data.forEach(project => {
            // Create project div
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('proiecte');

            // Create project title with link (GitHub link)
            const projectTitle = document.createElement('a');
            projectTitle.href = project.url;
            const titleText = document.createElement('h2');
            titleText.textContent = project.name;
            projectTitle.appendChild(titleText);

          
           
            
            // Create the technologies list
            const techHeader = document.createElement('h3');
            techHeader.textContent = 'Technologies:';
            const techList = document.createElement('ul');
            project.technologies.forEach(tech => {
                const listItem = document.createElement('li');
                listItem.textContent = tech;
                techList.appendChild(listItem);
            });

            // Append all elements to the project div
            projectDiv.appendChild(projectTitle);   // GitHub link
              // Only create and append the "View Project" link if urlSite exists
            if (project.urlSite) {
                const projectLink = document.createElement('a');
                projectLink.href = project.urlSite;
                const projectName = document.createElement('h2');
                projectName.textContent = 'View Project';  
                projectLink.appendChild(projectName);
                projectDiv.appendChild(projectLink); 
            }
            projectDiv.appendChild(techHeader);     // Technologies header
            projectDiv.appendChild(techList);       // Technologies list

            // Append project div to the container
            projectsContainer.appendChild(projectDiv);
            
        });
    } catch (error) {
        console.error('Error loading project data:', error);
    }
});
