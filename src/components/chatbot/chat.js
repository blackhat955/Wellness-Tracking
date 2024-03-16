import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import brand from '../../assets/images/brand.png';
import './chat.css';

const steps = [
    {
        id: '0',
        message: 'Welcome to Wellness Bot!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Please write your username',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: " Hi {previousValue}, how can I help you?",
        trigger: 4,
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'Yoga' },
            { value: 2, label: 'Diet' },
            { value: 3, label: 'Workout' },
            { value: 4, label: 'Meditation' },
        ],
        end: true,
    },
];

// Creating our own theme
const theme = {
    background: '#F4F4F4', // Light gray background
    headerBgColor: '#333333', // Green header background
    headerFontSize: '20px',
    botBubbleColor: '#64B5F6', // Light blue bot bubble color
    headerFontColor: 'white', // White font color for header text
    botFontColor: 'black', // Black font color for bot messages
    userBubbleColor: '#FFC107', // Amber user bubble color
    userFontColor: 'black', // Black font color for user messages
};

// Set some properties of the bot
const config = {
    botAvatar: brand,
    floating: true,
    width: '400px', // Set the width of the chatbot
    height: '600px', // Set the height of the chatbot
};

function Chat() {
    return (
        <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Wellness Bot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chat;
