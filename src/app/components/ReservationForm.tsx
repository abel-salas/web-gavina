'use client';

import { useState } from 'react';

interface ReservationFormProps {
  title: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: number | string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
}

export default function ReservationForm({ title, description }: ReservationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Regex para validar email
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }

    // Validar teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = 'El teléfono debe tener al menos 9 dígitos';
    }

    // Validar fecha
    if (!formData.date) {
      newErrors.date = 'La fecha es obligatoria';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'La fecha debe ser hoy o posterior';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí se puede integrar con un endpoint de API o servicio de email
      console.log('Datos de reserva:', formData);
      
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('¡Reserva enviada correctamente! Te contactaremos pronto para confirmar.');
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: 2
      });
      setErrors({});
      
    } catch (error) {
      console.error('Error al enviar reserva:', error);
      alert('Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? (isNaN(parseInt(value)) ? value : parseInt(value)) : value
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
      <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
        <span className="material-icons-outlined text-3xl">edit_calendar</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+34 XXX XXX XXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Fecha y Personas */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Personas
            </label>
            <select 
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Opciones individuales del 1 al 15 */}
              {Array.from({length: 15}, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'persona' : 'personas'}
                </option>
              ))}
              
              {/* Opciones especiales para grupos grandes */}
              <option value="15+">+15 personas (16-30)</option>
              <option value="30+">+30 personas (31-60)</option>
              <option value="60+">+60 personas (61-100)</option>
              <option value="100+">+100 personas (Más de 100)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-bold py-3 rounded-md transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-yellow-600 hover:bg-yellow-700 text-white'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Reserva'}
        </button>
      </form>

      <div className="mt-4 text-xs text-gray-500">
        * Campos obligatorios
      </div>
    </div>
  );
}