export default function TransfererPopup() {
  return (
    <>
      <div class="popup-overlay" id="transferPopup">
        <div class="popup-content">
          <div class="popup-header">
            <h2>Effectuer un transfert</h2>
            <button class="btn-close" id="closeTransferBtn" type="button">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="popup-body">
            <form id="transferForm" class="transfer-form">
              <div class="form-group">
                <label for="beneficiary">
                  <i class="fas fa-user"></i> Bénéficiaire
                </label>
                <select id="beneficiary" name="beneficiary" required>
                  <option value="" disabled selected>
                    Choisir un bénéficiaire
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="sourceCard">
                  <i class="fas fa-credit-card"></i> Depuis ma carte
                </label>
                <select id="sourceCard" name="sourceCard" required>
                  <option value="" disabled selected>
                    Sélectionner une carte
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="amount">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div class="amount-input">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                  <span class="currency">MAD</span>
                </div>
              </div>

              <div class="form-options">
                <div class="checkbox-group">
                  <input
                    type="checkbox"
                    id="saveBeneficiary"
                    name="saveBeneficiary"
                  />
                  <label for="saveBeneficiary">
                    Enregistrer ce bénéficiaire
                  </label>
                </div>

                <div class="checkbox-group">
                  <input
                    type="checkbox"
                    id="instantTransfer"
                    name="instantTransfer"
                  />
                  <label for="instantTransfer">
                    Transfert instantané
                    <span class="fee-badge">+13.4 MAD</span>
                  </label>
                </div>
              </div>

              <div class="form-actions">
                <button
                  type="button"
                  class="btn btn-secondary"
                  id="cancelTransferBtn"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  id="submitTransferBtn"
                >
                  <i class="fas fa-paper-plane"></i> Transférer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
