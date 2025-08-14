


import Styles from "./ContactInfo.module.css"

export default function ContactForm() {




  return (
    <div className={Styles.contactInfo}>
      <h2>Send us Messege</h2>
      <form>
        <label>Name: </label>
        <input type="text" placeholder="Write your name.." required/> <br></br>
        <label>Email: </label>
        <input type="email" placeholder="Write your mail" required/> <br></br>
        <textarea
          placeholder="write here, your Comments...."
          rows={2}
          required
        />
        <button type="syubmit">Send</button>
      </form>
    </div>
  );
}
