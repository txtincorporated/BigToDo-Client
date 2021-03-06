projectsService.$inject = ['$http', 'apiUrl'];

export default function projectsService($http, apiUrl) {
  return {
    getAllProjects() {
      return $http.get(`${apiUrl}/projects`)
        .then(res => res.data);
    },
    getProjectsByParent(parentId) {
      return $http.get(`${apiUrl}/projects?parent=${parentId}`)
        .then(res => res.data);
    },
    getProjectById(projectId) {
      return $http.get(`${apiUrl}/projects/${projectId}`)
        .then(res => res.data);
    },
    addProject(projectData) {
      return $http.post(`${apiUrl}/projects`, projectData)
        .then(res => res.data);
    },
    editProject(projectId, projectData) {
      return $http.put(`${apiUrl}/projects/${projectId}`, projectData)
        .then(res => res.data);
    },
    deleteProject(projectId) {
      return $http.delete(`${apiUrl}/projects/${projectId}`)
        .then(res => res.data);
    }
  };
}