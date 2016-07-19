import NoteActions from '../actions/NoteActions';

export default class NoteStore{
    constructor(){
        this.bindActions(NoteActions);
        this.notes = [];
    }
    create(note){
        this.setState({
            notes: this.notes.concat(note)
        });
    }
    update(updatedNote){
        this.setState({
            notes: this.notes.map(note => {
                if(note.id === updatedNote.id){
                    return Object.assign({}, note, updatedNote);
                }
                return note;
            })
        });
    }
    delete(id){
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });
    }
    vote(id){
        let loc_note = this.notes.filter(note => note.id === id)[0];        
        this.setState({
            notes: this.notes.map(note => {
                if(note.id === loc_note.id){
                    if(isNaN(loc_note.votes)){
                        loc_note.votes = 0;
                    }
                    else{
                        loc_note.votes += 1;
                    }
                    console.log(`Number of votes: ${loc_note.votes}`);
                    return Object.assign({}, note, loc_note);
                }
                return note;
            })
        });        
    }
    
}