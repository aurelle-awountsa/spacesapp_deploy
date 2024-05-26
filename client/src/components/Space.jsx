import React, { useState } from 'react'

import './Spaces.css'

function Space({ space }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row bs'>
            <div className="col-md-4">
                <img src={space.imageUrl[0]} className='smallimg' />
            </div>
            <div className="col-md-7">
                <h2>{space.titre}</h2>
                <b>
                    <p>Dimension : {space.dimension} m2</p>
                    <p>Catégorie : {space.categorie}</p>
                    <p>Prix : {space.prix}€</p>
                </b>
                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Détails</button>
                </div>

            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{space.titre}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" size='lg'>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">

                                    {space.imageUrl.map(url => {
                                        return <div className="carousel-item active" >
                                            <img src={url} className='d-block w-100 bigimg' />
                                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    })}

                                </div>

                            </div>
                            <p>{space.description}</p>
                            <div className="row g-3" id='form'>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Places assises : {space.place_assise}</label>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Places debout : {space.place_debout}</label>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Ville : {space.ville}</label>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Prix : {space.prix}</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary"  >Reserver</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Space 