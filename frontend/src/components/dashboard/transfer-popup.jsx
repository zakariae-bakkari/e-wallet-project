import { useState } from "react";

export default function TransfererPopup({ setAuthUser, settransferePopup }) {
  const [form, setForm] = useState({
    selectedBene: "",
    selectedCard: "",
    amount: 0,
  });
  return (
    <>
      <div className="popup-overlay" id="transferPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un transfert</h2>
            <button
              className="btn-close"
              id="closeTransferBtn"
              type="button"
              onClick={() => settransferePopup(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <form id="transferForm" className="transfer-form">
              <div className="form-group">
                <label htmlFor="beneficiary">
                  <i className="fas fa-user"></i> Bénéficiaire
                </label>
                <select id="beneficiary" name="beneficiary" required>
                  <option value="" disabled>
                    Choisir un bénéficiaire
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="sourceCard">
                  <i className="fas fa-credit-card"></i> Depuis ma carte
                </label>
                <select id="sourceCard" name="sourceCard" required>
                  <option value="" disabled>
                    Sélectionner une carte
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div className="amount-input">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                  <span className="currency">MAD</span>
                </div>
              </div>

              <div className="form-options">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="saveBeneficiary"
                    name="saveBeneficiary"
                  />
                  <label htmlFor="saveBeneficiary">
                    Enregistrer ce bénéficiaire
                  </label>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="instantTransfer"
                    name="instantTransfer"
                  />
                  <label htmlFor="instantTransfer">
                    Transfert instantané
                    <span className="fee-badge">+13.4 MAD</span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="cancelTransferBtn"
                  onClick={()=>settransferePopup(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitTransferBtn"
                >
                  <i className="fas fa-paper-plane"></i> Transférer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
