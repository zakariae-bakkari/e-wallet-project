export default function RechargerPopup({ setAuthUser, setrechargerPopup }) {
  const [form, setForm] = useState({
    sourceCard: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(form);
  };
  return (
    <>
      <div className="popup-overlay" id="rechargerPopup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Effectuer un recharge</h2>
            <button
              className="btn-close"
              id="closeRechargerBtn"
              type="button"
              onClick={() => setrechargerPopup(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <form
              id="transferForm"
              className="transfer-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="sourceCardRecharger">
                  <i className="fas fa-credit-card"></i> Choisir la carte
                </label>
                <select
                  id="sourceCardRecharger"
                  name="sourceCardRecharger"
                  required
                  value={form.sourceCard}
                  onChange={(e) =>
                    setForm({ ...form, sourceCard: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Sélectionner une carte
                  </option>
                  {setAuthUser.wallet.cards.map((c) => (
                    <option key={c.numcards} value={c.numcards}>
                      {c.numcards}({c.balance}DH)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amountrecharger">
                  {" "}
                  <i></i> Montant{" "}
                </label>
                <div className="amount-input">
                  <input
                    type="number"
                    id="amountrecharger"
                    name="amountrecharger"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    required
                    value={form.amount}
                    onChange={(e) =>
                      setForm({ ...form, amount: e.target.value })
                    }
                  />
                  <span className="currency">MAD</span>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="cancelRechargerBtn"
                  onClick={() => setrechargerPopup(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submitRechargerBtn"
                >
                  recharger
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
