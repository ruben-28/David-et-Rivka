var present = document.getElementById('presence');
var absent = document.getElementById('absence');

present.addEventListener('change', function() {
    if (present.checked) {
        document.getElementById('absence').checked = false;
    }
});

absent.addEventListener('change', function() {
    if (absent.checked) {
      document.getElementById('presence').checked = false;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const absenceCheckbox = document.getElementById('absence');
    const presenceCheckbox = document.getElementById('presence');
    const nbAdultsInput = document.getElementById('nbAdults');
    const nbEnfantsInput = document.getElementById('nbEnfants');

    function updateFields() {
        if (absenceCheckbox.checked) {
            // Si "N'assisteront pas" est coché
            nbAdultsInput.removeAttribute('required'); // Retire l'attribut required
            nbAdultsInput.disabled = true; // Désactive le champ
            nbEnfantsInput.removeAttribute('required'); // Retire l'attribut required
            nbEnfantsInput.disabled = true; // Désactive le champ

            // Vider les champs si déjà remplis
            nbAdultsInput.value = '';
            nbEnfantsInput.value = '';
        } else {
            // Si "N'assisteront pas" est décoché
            nbAdultsInput.setAttribute('required', 'required'); // Ajoute l'attribut required
            nbAdultsInput.disabled = false; // Active le champ
            nbEnfantsInput.setAttribute('required', 'required'); // Ajoute l'attribut required
            nbEnfantsInput.disabled = false; // Active le champ
        }
    }

    // Écouteurs d'événements pour les cases à cocher
    absenceCheckbox.addEventListener('change', updateFields);
    presenceCheckbox.addEventListener('change', function() {
        if (presenceCheckbox.checked) {
            absenceCheckbox.checked = false; // Décocher "N'assisteront pas"
            updateFields(); // Met à jour les champs en conséquence
        }
    });

    // Écouteur d'événements pour la case "N'assisteront pas"
    absenceCheckbox.addEventListener('change', function() {
        if (absenceCheckbox.checked) {
            presenceCheckbox.checked = false; // Décocher "Assisteront"
            updateFields(); // Met à jour les champs en conséquence
        }
    });
});

