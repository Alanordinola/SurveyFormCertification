// script.js - Versión Corregida
document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const themeToggle = document.getElementById('checkbox');
    const themeText = document.querySelector('.theme-text');
    const form = document.getElementById('survey-form');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.querySelector('.progress-text');
    const commentsTextarea = document.getElementById('comments');
    
    // 1. Sistema de tema claro/oscuro
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Aplicar tema guardado o preferencia del sistema
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
            themeText.textContent = 'Light Mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.checked = false;
            themeText.textContent = 'Dark Mode';
        }
        
        // Event listener para el toggle
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeText.textContent = 'Light Mode';
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeText.textContent = 'Dark Mode';
            }
        });
    }
    
    // 2. Validación de formularios y barra de progreso CORREGIDA
    function initValidation() {
        // Reiniciar estado de validación de todos los campos
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('valid', 'invalid');
            const errorMessage = group.querySelector('.error-message');
            if (errorMessage) errorMessage.style.display = 'none';
            
            const validIcon = group.querySelector('.validation-icon.valid');
            const invalidIcon = group.querySelector('.validation-icon.invalid');
            if (validIcon) validIcon.style.opacity = '0';
            if (invalidIcon) invalidIcon.style.opacity = '0';
        });
        
        // Quitar checked del radio button por defecto
        const defaultRadio = document.querySelector('input[name="recommend"][checked]');
        if (defaultRadio) {
            defaultRadio.removeAttribute('checked');
        }
        
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Agregar validación a todos los campos excepto age y comments
            if (input.id !== 'number' && input.id !== 'comments') {
                input.addEventListener('input', handleInputValidation);
                input.addEventListener('blur', handleInputValidation);
                
                // Para radio buttons, validar todo el grupo cuando uno cambia
                if (input.type === 'radio') {
                    input.addEventListener('change', function() {
                        document.querySelectorAll(`input[name="${this.name}"]`).forEach(radio => {
                            const event = new Event('input', { bubbles: true });
                            radio.dispatchEvent(event);
                        });
                    });
                }
                
                // Para checkboxes, validar el grupo de mejoras
                if (input.type === 'checkbox' && input.name === 'improvements') {
                    input.addEventListener('change', function() {
                        const checkboxes = document.querySelectorAll('input[name="improvements"]');
                        checkboxes.forEach(checkbox => {
                            const event = new Event('input', { bubbles: true });
                            checkbox.dispatchEvent(event);
                        });
                    });
                }
            }
        });
        
        // Configurar contador de caracteres para el textarea
        if (commentsTextarea) {
            // Eliminar contador duplicado si existe
            const existingCounter = commentsTextarea.parentNode.querySelector('.char-count');
            if (existingCounter) {
                existingCounter.remove();
            }
            
            // Crear nuevo contador
            const charCount = document.createElement('div');
            charCount.className = 'char-count';
            charCount.textContent = '0/500 characters';
            commentsTextarea.parentNode.appendChild(charCount);
            
            commentsTextarea.addEventListener('input', function() {
                const length = this.value.length;
                charCount.textContent = `${length}/500 characters`;
                
                if (length > 450) {
                    charCount.style.color = '#ff6b6b';
                } else {
                    charCount.style.color = '';
                }
            });
        }
        
        // Inicializar barra de progreso en 0%
        updateProgress();
    }
    
    // Manejar validación de inputs
    function handleInputValidation(e) {
        const field = e.target;
        const formGroup = field.closest('.form-group');
        
        if (!formGroup) return;
        
        const errorMessage = formGroup.querySelector('.error-message');
        const validIcon = formGroup.querySelector('.validation-icon.valid');
        const invalidIcon = formGroup.querySelector('.validation-icon.invalid');
        
        // Resetear estado
        formGroup.classList.remove('valid', 'invalid');
        if (validIcon) validIcon.style.opacity = '0';
        if (invalidIcon) invalidIcon.style.opacity = '0';
        if (errorMessage) errorMessage.style.display = 'none';
        
        // Validar campo
        const isValid = validateField(field, formGroup);
        
        // Actualizar UI
        if (isValid && isFieldCompleted(field)) {
            formGroup.classList.add('valid');
            if (validIcon) validIcon.style.opacity = '1';
        } else if (!isValid && field.value.trim() !== '') {
            formGroup.classList.add('invalid');
            if (invalidIcon) invalidIcon.style.opacity = '1';
            if (errorMessage) errorMessage.style.display = 'block';
        }
        
        // Actualizar progreso
        updateProgress();
    }
    
    // Verificar si un campo está completado
    function isFieldCompleted(field) {
        if (field.type === 'radio') {
            // Para radio buttons, verificar si alguno del grupo está seleccionado
            return document.querySelector(`input[name="${field.name}"]:checked`) !== null;
        } else if (field.type === 'checkbox' && field.name === 'improvements') {
            // Para checkboxes de mejoras, verificar si al menos uno está seleccionado
            return document.querySelectorAll('input[name="improvements"]:checked').length > 0;
        }
        return field.value.trim() !== '';
    }
    
    // Validar campo individual
    function validateField(field, formGroup) {
        const errorMessage = formGroup.querySelector('.error-message');
        
        // Campo requerido pero vacío
        if (field.hasAttribute('required') && !isFieldCompleted(field)) {
            if (errorMessage) errorMessage.textContent = 'This field is required';
            return false;
        }
        
        // Validación de email
        if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                if (errorMessage) errorMessage.textContent = 'Please enter a valid email address';
                return false;
            }
        }
        
        // Validación de número
        if (field.type === 'number' && field.value.trim()) {
            const min = parseInt(field.getAttribute('min')) || 0;
            const max = parseInt(field.getAttribute('max')) || Infinity;
            const value = parseInt(field.value);
            
            if (isNaN(value) || value < min || value > max) {
                if (errorMessage) errorMessage.textContent = `Must be between ${min} and ${max}`;
                return false;
            }
        }
        
        // Validación de dropdown
        if (field.tagName === 'SELECT' && field.hasAttribute('required')) {
            if (!field.value) {
                if (errorMessage) errorMessage.textContent = 'Please select an option';
                return false;
            }
        }
        
        // Validación de radio buttons
        if (field.type === 'radio' && field.hasAttribute('required')) {
            const radioGroup = document.querySelectorAll(`input[name="${field.name}"]`);
            const isChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (!isChecked) {
                if (errorMessage) errorMessage.textContent = 'Please select an option';
                return false;
            }
        }
        
        // Validación de checkboxes (mejoras)
        if (field.type === 'checkbox' && field.name === 'improvements' && field.hasAttribute('required')) {
            const checkboxes = document.querySelectorAll('input[name="improvements"]');
            const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            if (!isChecked) {
                if (errorMessage) errorMessage.textContent = 'Please select at least one option';
                return false;
            }
        }
        
        return true;
    }
    
    // Actualizar barra de progreso CORREGIDA - 5 campos requeridos
    function updateProgress() {
        // Campos a considerar: name, email, satisfaction, recommend, improvements
        const fieldsToTrack = [
            '#name', 
            '#email', 
            '#dropdown',
            'input[name="recommend"]',
            'input[name="improvements"]'
        ];
        
        let completedCount = 0;
        
        fieldsToTrack.forEach(selector => {
            if (selector === 'input[name="recommend"]') {
                // Para radio buttons
                if (document.querySelector('input[name="recommend"]:checked')) {
                    completedCount++;
                }
            } else if (selector === 'input[name="improvements"]') {
                // Para checkboxes de mejoras
                if (document.querySelectorAll('input[name="improvements"]:checked').length > 0) {
                    completedCount++;
                }
            } else {
                // Para campos regulares
                const field = document.querySelector(selector);
                if (field && field.value.trim() !== '' && 
                    (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
                    completedCount++;
                }
            }
        });
        
        const totalCount = fieldsToTrack.length;
        const percentage = Math.round((completedCount / totalCount) * 100);
        
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
        
        if (progressText) {
            progressText.textContent = percentage + '% completed';
        }
        
        return percentage;
    }
    
    // 3. Manejo de envío del formulario
    function initFormSubmission() {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar todos los campos requeridos antes de enviar
            let allValid = true;
            const fieldsToValidate = [
                '#name', 
                '#email', 
                '#dropdown', 
                'input[name="recommend"]',
                'input[name="improvements"]'
            ];
            
            fieldsToValidate.forEach(selector => {
                if (selector === 'input[name="recommend"]') {
                    const radioGroup = document.querySelectorAll(selector);
                    const formGroup = radioGroup[0].closest('.form-group');
                    if (!document.querySelector('input[name="recommend"]:checked')) {
                        formGroup.classList.add('invalid');
                        const errorMessage = formGroup.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please select an option';
                            errorMessage.style.display = 'block';
                        }
                        allValid = false;
                    }
                } else if (selector === 'input[name="improvements"]') {
                    const checkboxes = document.querySelectorAll(selector);
                    const formGroup = checkboxes[0].closest('.form-group');
                    if (document.querySelectorAll('input[name="improvements"]:checked').length === 0) {
                        formGroup.classList.add('invalid');
                        const errorMessage = formGroup.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please select at least one option';
                            errorMessage.style.display = 'block';
                        }
                        allValid = false;
                    }
                } else {
                    const field = document.querySelector(selector);
                    if (field) {
                        const formGroup = field.closest('.form-group');
                        const event = new Event('blur', { bubbles: true });
                        field.dispatchEvent(event);
                        
                        if (!formGroup.classList.contains('valid')) {
                            allValid = false;
                        }
                    }
                }
            });
            
            if (allValid) {
                simulateFormSubmission();
            } else {
                // Scroll al primer error
                const firstError = form.querySelector('.invalid');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
    
    // Simular envío del formulario
    function simulateFormSubmission() {
        const submitBtn = document.getElementById('submit');
        const originalText = submitBtn.innerHTML;
        
        // Mostrar estado de carga
        submitBtn.innerHTML = 'Sending... <span class="spinner"></span>';
        submitBtn.disabled = true;
        
        // Simular retraso de red
        setTimeout(() => {
            showSuccessMessage();
        }, 2000);
    }
    
    // Mostrar mensaje de éxito
    function showSuccessMessage() {
        const successHTML = `
            <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>Survey Submitted Successfully!</h3>
                <p>Thank you for your feedback. Your response has been recorded.</p>
                <button type="button" onclick="location.reload()" class="submit-btn">Submit Another Response</button>
            </div>
        `;
        
        form.innerHTML = successHTML;
    }
    
    // 4. Inicializar todas las funcionalidades
    function init() {
        initTheme();
        initValidation(); // Esta función ahora reinicia el estado correctamente
        initFormSubmission();
    }
    
    // Ejecutar inicialización
    init();
});