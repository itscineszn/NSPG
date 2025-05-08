const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget); 
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return; // If walang modal na nahanap, means do nothing
    modal.classList.add('active'); // Add ang 'active' class para lumitaw ang modal
    overlay.classList.add('active'); // ItsShowTime overlay
}

// Function to close the modal
function closeModal(modal) {
    if (modal == null) return; // If no modal is found, do nothing
    modal.classList.remove('active'); // alising ang  'active' class para itago or i hhidden ang modal
    overlay.classList.remove('active'); // Hide the overlay
}

