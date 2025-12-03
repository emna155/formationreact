import React, { useState } from 'react';

const CheckoutPage = () => {
  // Données du panier (exemple)
  const [cartItems] = useState([
    {
      id: 1,
      name: "Miel de Fleurs",
      price: 25.00,
      quantity: 2,
      image: "https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg"
    },
    {
      id: 2,
      name: "Miel d'Eucalyptus",
      price: 30.00,
      quantity: 1,
      image: "https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg"
    }
  ]);

  // État du formulaire
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Adresse de livraison
    address: '',
    city: '',
    postalCode: '',
    country: 'Tunisie',
    
    // Mode de paiement
    paymentMethod: 'cash',
    
    // Notes
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculs
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 7.00;
  const total = subtotal + shipping;

  // Gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation du formulaire
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
      if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
      if (!formData.email.trim()) {
        newErrors.email = 'L\'email est requis';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Le téléphone est requis';
      } else if (!/^[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Numéro invalide (8 chiffres)';
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = 'L\'adresse est requise';
      if (!formData.city.trim()) newErrors.city = 'La ville est requise';
      if (!formData.postalCode.trim()) newErrors.postalCode = 'Le code postal est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Passer à l'étape suivante
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Retour à l'étape précédente
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Soumettre la commande
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(2)) {
      // Simuler l'envoi de la commande
      setTimeout(() => {
        setOrderPlaced(true);
      }, 1000);
    }
  };

  // Style commun pour les inputs
  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    transition: 'border-color 0.3s'
  };

  const errorStyle = {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px'
  };

  // Page de confirmation de commande
  if (orderPlaced) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '60px 40px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#27ae60',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            fontSize: '40px',
            color: '#fff'
          }}>
            ✓
          </div>
          
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '15px'
          }}>
            Commande confirmée !
          </h1>
          
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '10px'
          }}>
            Merci {formData.firstName} pour votre commande
          </p>
          
          <p style={{
            fontSize: '14px',
            color: '#999',
            marginBottom: '30px'
          }}>
            Un email de confirmation a été envoyé à <strong>{formData.email}</strong>
          </p>

          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px',
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>
              Résumé de la commande
            </h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Total:</strong> {total.toFixed(2)} TND
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Mode de paiement:</strong> {formData.paymentMethod === 'cash' ? 'Paiement à la livraison' : 'Carte bancaire'}
            </div>
            <div>
              <strong>Adresse de livraison:</strong><br/>
              {formData.address}, {formData.city} {formData.postalCode}
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#6A4E23',
              color: '#fff',
              border: 'none',
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Retour à l'accueil
          </button>
          
          <button
            onClick={() => window.location.href = '/catalogue'}
            style={{
              backgroundColor: 'transparent',
              color: '#6A4E23',
              border: '2px solid #6A4E23',
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* En-tête */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            Finaliser ma commande
          </h1>
          
          {/* Indicateur d'étapes */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '30px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 1 ? '#6A4E23' : '#ddd',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <span style={{
                fontWeight: currentStep === 1 ? 'bold' : 'normal',
                color: currentStep >= 1 ? '#333' : '#999'
              }}>
                Informations
              </span>
            </div>

            <div style={{
              width: '50px',
              height: '2px',
              backgroundColor: currentStep >= 2 ? '#6A4E23' : '#ddd'
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 2 ? '#6A4E23' : '#ddd',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <span style={{
                fontWeight: currentStep === 2 ? 'bold' : 'normal',
                color: currentStep >= 2 ? '#333' : '#999'
              }}>
                Livraison
              </span>
            </div>

            <div style={{
              width: '50px',
              height: '2px',
              backgroundColor: currentStep >= 3 ? '#6A4E23' : '#ddd'
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 3 ? '#6A4E23' : '#ddd',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <span style={{
                fontWeight: currentStep === 3 ? 'bold' : 'normal',
                color: currentStep >= 3 ? '#333' : '#999'
              }}>
                Paiement
              </span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 400px' : '1fr',
          gap: '30px'
        }}>
          {/* Formulaire */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Informations personnelles */}
              {currentStep === 1 && (
                <div>
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '25px',
                    color: '#333'
                  }}>
                    Informations personnelles
                  </h2>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          borderColor: errors.firstName ? '#e74c3c' : '#ddd'
                        }}
                        placeholder="Votre prénom"
                      />
                      {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          borderColor: errors.lastName ? '#e74c3c' : '#ddd'
                        }}
                        placeholder="Votre nom"
                      />
                      {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? '#e74c3c' : '#ddd'
                      }}
                      placeholder="exemple@email.com"
                    />
                    {errors.email && <div style={errorStyle}>{errors.email}</div>}
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderColor: errors.phone ? '#e74c3c' : '#ddd'
                      }}
                      placeholder="12 345 678"
                    />
                    {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                  </div>
                </div>
              )}

              {/* Étape 2: Adresse de livraison */}
              {currentStep === 2 && (
                <div>
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '25px',
                    color: '#333'
                  }}>
                    Adresse de livraison
                  </h2>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      Adresse complète *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderColor: errors.address ? '#e74c3c' : '#ddd'
                      }}
                      placeholder="Rue, numéro, appartement..."
                    />
                    {errors.address && <div style={errorStyle}>{errors.address}</div>}
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          borderColor: errors.city ? '#e74c3c' : '#ddd'
                        }}
                        placeholder="Votre ville"
                      />
                      {errors.city && <div style={errorStyle}>{errors.city}</div>}
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        Code postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          borderColor: errors.postalCode ? '#e74c3c' : '#ddd'
                        }}
                        placeholder="1000"
                      />
                      {errors.postalCode && <div style={errorStyle}>{errors.postalCode}</div>}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      Notes (optionnel)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="4"
                      style={{
                        ...inputStyle,
                        resize: 'vertical'
                      }}
                      placeholder="Instructions de livraison, commentaires..."
                    />
                  </div>
                </div>
              )}

              {/* Étape 3: Paiement */}
              {currentStep === 3 && (
                <div>
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '25px',
                    color: '#333'
                  }}>
                    Mode de paiement
                  </h2>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      border: `2px solid ${formData.paymentMethod === 'cash' ? '#6A4E23' : '#ddd'}`,
                      borderRadius: '8px',
                      marginBottom: '15px',
                      cursor: 'pointer',
                      backgroundColor: formData.paymentMethod === 'cash' ? '#f9f5f0' : '#fff'
                    }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleChange}
                        style={{ marginRight: '10px' }}
                      />
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                          💵 Paiement à la livraison
                        </div>
                        <div style={{ fontSize: '13px', color: '#666' }}>
                          Payez en espèces lors de la réception
                        </div>
                      </div>
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      border: `2px solid ${formData.paymentMethod === 'card' ? '#6A4E23' : '#ddd'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: formData.paymentMethod === 'card' ? '#f9f5f0' : '#fff'
                    }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        style={{ marginRight: '10px' }}
                      />
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                          💳 Carte bancaire
                        </div>
                        <div style={{ fontSize: '13px', color: '#666' }}>
                          Paiement sécurisé par carte
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Boutons de navigation */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '30px'
              }}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      flex: 1,
                      padding: '15px',
                      backgroundColor: 'transparent',
                      color: '#6A4E23',
                      border: '2px solid #6A4E23',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    ← Retour
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      flex: 1,
                      padding: '15px',
                      backgroundColor: '#6A4E23',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Continuer →
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '15px',
                      backgroundColor: '#6A4E23',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Confirmer la commande
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Résumé de la commande */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '25px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            height: 'fit-content',
            position: 'sticky',
            top: '20px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333'
            }}>
              Résumé de la commande
            </h2>

            {cartItems.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px solid #eee'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '6px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    Qté: {item.quantity}
                  </div>
                </div>
                <div style={{ fontWeight: 'bold', color: '#6A4E23' }}>
                  {(item.price * item.quantity).toFixed(2)} TND
                </div>
              </div>
            ))}

            <div style={{
              borderTop: '2px solid #eee',
              paddingTop: '15px',
              marginTop: '15px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                fontSize: '14px',
                color: '#666'
              }}>
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} TND</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                fontSize: '14px',
                color: '#666'
              }}>
                <span>Livraison</span>
                <span>{shipping.toFixed(2)} TND</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                paddingTop: '15px',
                borderTop: '2px solid #eee'
              }}>
                <span>Total</span>
                <span style={{ color: '#6A4E23' }}>{total.toFixed(2)} TND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;