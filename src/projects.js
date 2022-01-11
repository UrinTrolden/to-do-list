export { project, changeCurrentProject };

const project = (() => {
    let defaultProject = [];
    let projectsArray = [defaultProject];
    let currentProject = defaultProject;

    return { currentProject, projectsArray };
})();

const changeCurrentProject = (projectParameter) => {
    project.currentProject = projectParameter;
}