document.addEventListener('DOMContentLoaded', () => {
    // Handle Operation Form Submission
    document.getElementById('operation-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('operation-name').value;
        const type = document.getElementById('operation-type').value;
        const branches = document.getElementById('branches').value;
        
        alert(`Operation "${name}" of type "${type}" is planned with branches: ${branches}`);
    });

    // Handle Timeline Event Submission
    document.getElementById('timeline-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const eventName = document.getElementById('timeline-event').value;
        const eventTime = document.getElementById('timeline-time').value;

        const timelineEntry = document.createElement('li');
        timelineEntry.textContent = `${eventName} at ${eventTime}`;
        document.getElementById('timeline-view').querySelector('ul').appendChild(timelineEntry);
    });

    // Handle Resource Form Submission
    document.getElementById('resource-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const resourceName = document.getElementById('resource-name').value;
        const resourceType = document.getElementById('resource-type').value;
        const resourceQuantity = document.getElementById('resource-quantity').value;

        const resourceEntry = document.createElement('div');
        resourceEntry.textContent = `${resourceName} (${resourceType}): ${resourceQuantity}`;
        document.getElementById('resources-list').appendChild(resourceEntry);
    });
});
