// Common Variables
const customerForm = document.getElementById("customer-form");
const requestList = document.getElementById("request-list");
const workerDashboardLink = document.getElementById("worker-dashboard-link");
const modal = document.querySelector(".modal");
const openModalBtn = document.getElementById("openModalBtn"); // Updated ID
const closeModalBtn = document.querySelector(".close");

// Load Requests from localStorage
function loadRequests() {
    const requests = JSON.parse(localStorage.getItem("serviceRequests")) || [];
    return requests;
}

// Save Requests to localStorage
function saveRequests(requests) {
    localStorage.setItem("serviceRequests", JSON.stringify(requests));
}

// Open Modal
if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // Show modal
    });
}

// Close Modal
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
    });
}

// Close Modal on Outside Click
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });
}

// Customer Form Submission
if (customerForm) {
    customerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        const newRequest = { name, service, date, status: "Pending" };
        const requests = loadRequests();
        requests.push(newRequest);
        saveRequests(requests);

        alert("Service request submitted!");
        customerForm.reset();
        modal.style.display = "none"; // Close modal on form submission
    });
}

// Render Requests for Worker
if (requestList) {
    const requests = loadRequests();

    if (requests.length === 0) {
        requestList.innerHTML = "<p>No service requests available.</p>";
    } else {
        requests.forEach((request, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Name:</strong> ${request.name} <br>
                <strong>Service:</strong> ${request.service} <br>
                <strong>Date:</strong> ${request.date} <br>
                <strong>Status:</strong> ${request.status} <br>
                <button onclick="acceptRequest(${index})">Accept Request</button>
            `;
            requestList.appendChild(listItem);
        });
    }
}

// Accept Request
function acceptRequest(index) {
    const requests = loadRequests();
    requests[index].status = "Accepted";
    saveRequests(requests);

    alert("Request Accepted!");
    window.location.reload();
}

// Navigation to Worker Dashboard
if (workerDashboardLink) {
    workerDashboardLink.addEventListener("click", () => {
        window.location.href = "worker.html";
    });
}
