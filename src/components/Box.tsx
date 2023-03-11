import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './Box.css';


export function Box() {
    return (
        <div className='body'>
            <h1>Feedback UI</h1>
            <div className='wrapper'>Inner Text
                <table>
                    <thead>
                        <tr>
                            <td>
                                <div className='card feedback-question'>
                                    How would u rate?
                                    <div className="btn-group" role="group">
                                        <button type="button" className='btn btn-outline-secondary option'>1</button>
                                        <button type="button" className='btn btn-outline-secondary option'>2</button>
                                        <button type="button" className='btn btn-outline-secondary option'>3</button>
                                        <button type="button" className='btn btn-outline-secondary option'>4</button>
                                        <button type="button" className='btn btn-outline-secondary option'>5</button>
                                        <button type="button" className='btn btn-outline-secondary option'>6</button>
                                        <button type="button" className='btn btn-outline-secondary option'>7</button>
                                        <button type="button" className='btn btn-outline-secondary option'>8</button>
                                        <button type="button" className='btn btn-outline-secondary option'>9</button>
                                        <button type="button" className='btn btn-outline-secondary option'>10</button>
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><div className='card comment'>Comment</div></td></tr>
                        <tr><td><div className='card comment'> Comment</div></td></tr>
                    </tbody>


                </table>
                <div ></div>
            </div>
        </div>

    );
}