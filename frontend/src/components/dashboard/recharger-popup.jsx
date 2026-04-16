import { useState } from "react";
import { hasPaymentMethodDB, checkPaymentMethodDB } from "../../db/database";

export default function RechargerPopup({
  setAuthUser,
  setrechargerPopup,
  authUser,
}) {
  const [form, setForm] = useState({
    sourceCard: "",
    amount: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    recharger(authUser, form.amount, form.sourceCard);
  }

  async function recharger(user, amount, sourceCard) {
    try {
      const hasPM = await hasPaymentMethod(user.id);
      console.log(hasPM);
      const checkPM = await checkPaymentMethod(sourceCard, user.id);
      console.log(checkPM);
      const trans = await addTransaction(user, amount, sourceCard);
      console.log(trans);
    } catch (e) {
      console.log(e);
    }
  }

  function hasPaymentMethod(userID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const payment = hasPaymentMethodDB(userID);
        if (payment) {
          resolve("Un moyen de paiement est disponible");
        } else {
          reject("Aucun moyen de paiement trouve");
        }
      }, 1000);
    });
  }

  function checkPaymentMethod(numCard, userID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const check = checkPaymentMethodDB(numCard, userID);
        if (check) {
          resolve(`${numCard} est une card valide`);
        } else {
          reject(`${numCard} n'est pas une card valide`);
        }
      }, 1000);
    });
  }

  //type : echoue ou recharge
  function simulerServeurresponse() {
    const random = Math.random();
    return random < 0.7 ? "recharge" : "echec";
  }
 async function addTransaction(user, amount, numCard) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = simulerServeurresponse();
      const numericAmount = parseFloat(amount);

      if (status === "recharge") {
        // Create a deep-ish copy to avoid mutation
        const updatedUser = {
          ...user,
          wallet: {
            ...user.wallet,
            balance: user.wallet.balance + numericAmount,
            cards: user.wallet.cards.map(card => 
              card.numcards === numCard 
                ? { ...card, balance: card.balance - numericAmount } 
                : card
            ),
            transactions: [
              ...user.wallet.transactions,
              {
                id: Date.now(),
                type: "credit", // Recharge is a credit to the wallet
                amount: numericAmount,
                date: new Date().toLocaleDateString(),
                from: numCard,
                to: "mywallet",
              }
            ]
          }
        };

        setAuthUser(updatedUser);
        resolve("La transaction a été ajoutée avec succès");
      } else {
        reject("La transaction a échoué");
      }
    }, 1000);
  });
}
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
                  {authUser.wallet.cards.map((c) => (
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
