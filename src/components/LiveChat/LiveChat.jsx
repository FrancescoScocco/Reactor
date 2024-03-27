import { useContext, useEffect, useState } from "react"
import classes from "./LiveChat.module.css"
import { UserContext } from "../../Contexts/UserContext"
import supabase from "../../database/supabase";

export default function LiveChat({ game }) {

    const { profile } = useContext(UserContext);
    const [userMessage, setUserMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    }

    const handleClick = async () => {
        const { data, error } = await supabase
            .from('messages')
            .insert([{ profile_id: profile.id, game_id: game.id, message: userMessage }]);

        if (!error) {
            setUserMessage(""); // Reset input value after sending message
        }
    }

    const getMessages = async () => {
        let { data: messages, error } = await supabase
            .from('messages')
            .select('*, profile: profiles(username, avatar_url)')
            .eq('game_id', game.id);

        if (!error) {
            setMessages(messages || []);
        }
    }

    useEffect(() => {
        getMessages();

        const channels = supabase.channel('custom-all-channel')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload) => {
                console.log('Change received!', payload);
                getMessages();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channels);
        };
    }, []);

    return (
        <div className={`col-12 col-md-5  ${classes.container}`}>
            <h6 className="text-center">Live-Chat</h6>
            <div className={`${classes.review_section1} ${classes.scroll_box1}`}>
                {messages.map((message) => (
                    <div key={message.id}>
                        <div className="d-flex">
                            <p>{message.profile.username}</p>
                            <img src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${message.profile.avatar_url}`} className={`rounded-circle ${classes.img_custom}`} alt="" />
                        </div>
                        <p>{message.message}</p>
                        <hr className="text-color" />
                    </div>
                ))}
            </div>
            <input
                value={userMessage}
                onChange={handleChange}
                className={`${classes.review_input1}`}
                placeholder="Inizia a scrivere"
                type="text"
                name=""
                id=""
            />
            <button onClick={handleClick} className={`btn ${classes.review_btn1}`}>Invia</button>
        </div>
    );
}
