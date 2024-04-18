import React, {useEffect} from 'react';
import ChatBot from 'react-simple-chatbot';
import { Link,useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import brand from '../../assets/images/brand.png';
import './chat.css';



function Chat() {
    const navigate = useNavigate();

useEffect(() => {
  const userDetails = localStorage.getItem('userDetails');
  if (!userDetails || !JSON.parse(userDetails).firstname) {
    navigate('/'); // Redirect to login page
  }
}, [navigate]);


const value = JSON.parse(localStorage.getItem('userDetails'));
const user = value.firstname;


const steps = [
    {
        id: 'welcome',
        message: 'Hello!',
        trigger: 'q-firstname',
    },
    {
        id: 'q-firstname',
        message: 'What is your name?',
        trigger: 'firstname',
    },
    {
        id: 'firstname',
        user: true,
        validator: (value) => {
          if (/^[A-Za-z]+$/.test(value)) {
            return true
          } else {
            return 'Please input alphabet characters only.'
          }
        },
        trigger: 'wellnessbot',
    },
    {
        id: 'wellnessbot',
        message:
          'Hi {previousValue}, I am Wellness Bot! What can I do for you?',
        trigger: 'qtype',
    },
    {
        id: 'qtype',
        options: [
          { value: 1, label: 'Workout Plans', trigger: '3' },
          { value: 2, label: 'Workout Professionals', trigger: '4' },
          { value: 3, label: 'Contact us', trigger: '5' },
          { value: 4, label: 'About us', trigger: '6' },
        ],
    },
    {
        id: '3',
        component: (
            <div>
                Are you looking for workout plans to start off your fitness journey? Try checking out this section:
                <Link to={`https://wellnessfinal.vercel.app/workplans/${user}`}>Professionals</Link>
            </div>
        ),
        asMessage: true,
        trigger: 'q-submit',
    },
    {
        id: '4',
        component: (
            <div>
                Confused how to begin your fitness journey? Get help from our certified Professionals:
                <Link to={`https://wellnessfinal.vercel.app/professional/${user}`}>Professionals</Link>

            </div>
        ),
        asMessage: true,
        trigger: 'q-submit',
    },
    {
        id: '5',
        component: (
            <div>
                Could not find what you want? Let us know so we can help you:
                {/* <Link to="/professional"> Contact us</Link> */}
            </div>
        ),
        asMessage: true,
        trigger: 'q-submit',
    },
    {
        id: '6',
        component: (
            <div>
                Want to know more about us? Head on to this page for more information:
                {/* <Link to="/professional"> About us</Link> */}
            </div>
        ),
        asMessage: true,
        trigger: 'q-submit',
    },
    {
        id: 'q-submit',
        message: 'Are you satisfied with the response!?',
        trigger: 'submit',
    },
    {
        id: 'submit',
        options: [
          { value: 'y', label: 'Yes', trigger: 'end-message' },
          { value: 'n', label: 'No', trigger: 'no-submit' },
        ],
    },
    {
        id: 'q-end',
        options: [
          { value: 'y', label: 'Yes', trigger: 'qtype' },
          { value: 'n', label: 'No', trigger: 'end-message' },
        ],
    },
    {
        id: 'no-submit',
        component: (
            <div>
                <div>
                    Could not find what you want? Let us know so we can help you:
                    {/* <Link to="/professional"> Contact us</Link> */}
                </div>
                <div>
                    Do you have any other questions !?
                </div>
                
            </div>
        ),
        asMessage: true,
        trigger: 'q-end',        
    },
    {
        id: 'end-message',
        component: (
            <div>Good to see you!</div>
        ),
        asMessage: true,
        end: true,
    },
];

// Creating our own theme
const theme = {
    background: '#F4F4F4', // Light gray background
    headerBgColor: '#333333', // Green header background
    headerFontSize: '15px',
    botBubbleColor: '#64B5F6', // Light blue bot bubble color
    headerFontColor: 'white', // White font color for header text
    botFontColor: 'black', // Black font color for bot messages
    userBubbleColor: '#FFC107', // Amber user bubble color
    userFontColor: 'black', // Black font color for user messages
};

// Set some properties of the bot
const config = {
    // width: '300px', // Set the width of the chatbot
    // height: '400px', // Set the height of the chatbot
    // botAvatar: brand,
    floating: true,
    placeholder: 'Type your response...',
    headerTitle: 'Wellness Bot',
};

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    );
}

export default Chat;
