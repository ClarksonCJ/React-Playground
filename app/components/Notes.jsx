import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

export default ({
    notes,
    onNoteClick = () => {}, onEdit=() => {}, onDelete = () => {}, onVote= () => {}
}) => (
    <ul className="notes">{notes.map(({id, editing, task, votes}) => 
        <li key={id}>
            <div className="note-and-vote">                
                <Note className="note" id={id}
                    editing={editing}
                    onClick={onNoteClick.bind(null, id)}
                    onMove={LaneActions.move}>                    
                        <Editable
                            className="editable"
                            editing={editing}
                            value={task}
                            onEdit={onEdit.bind(null, id)} />
                        <span className="vote-output">{votes}</span>                    
                        <button className="delete" onClick={onDelete.bind(null, id)}>x</button> 
                        <button className="vote" onClick={onVote.bind(null, id)}>V</button>        
                </Note>                
            </div>
        </li>
    )}</ul>
);