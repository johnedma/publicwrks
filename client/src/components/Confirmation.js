import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Confirmation = ({ modal, order, closeModal }) => {
    // debugger
    // if (modal.false) return

    console.log(closeModal)
    return (
        <div>

            {/* <div className={`${modal}`}> */}
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">PublicWRKS Order Confirmation</p>
                        <Link to="/">
                            <button className="delete" aria-label="close" onClick={closeModal}></button>
                        </Link>
                    </header>
                    <section className="modal-card-body">
                        Your order number is <b>{order.confId}</b> We have emailed your order confirmation, and will
                send an update when your order has shipped.
                </section>
                    <footer className="modal-card-foot">
                        <Link to="/"> <button className="button is-success" onClick={closeModal}>Thanks!</button></Link>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
// add nav favicon or fab that updates on add to cart
// after purchase complete, create order with shipped to default of false
// form should have csurf
// seed data and models tonight + shirt mock w/ img inside it
