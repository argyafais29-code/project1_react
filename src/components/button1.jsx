function Button1() {
    function tampilkanPesan () {
        alert('Tombol diklik!');
    }

    return (
        <div>
            <h2>Belajar Event</h2>
            <button onClick={tampilkanPesan}>Klik Saya</button>
        </div>
    ); 
}
export default Button1;