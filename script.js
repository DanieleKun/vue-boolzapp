const root = new Vue({
    el: "#app",
    data: {
        activeChat: 0,
        newMessage: "",
        contactsFound: "",
        contacts: [
            {
                name: 'Zombie',
                avatar: 'img/avatar-zombie.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Batman',
                avatar: 'img/avatar-batman.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Jason',
                avatar: 'img/avatar-jason.png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Walter',
                avatar: 'img/avatar-walter.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Harley',
                avatar: 'img/avatar-harley.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alien',
                avatar: 'img/avatar-alien.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Trump',
                avatar: 'img/avatar-trump.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luchador',
                avatar: 'img/avatar-luchador.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]

    },
    methods: {
        activeContact(index) {
            this.activeChat = index;
        },

        addMsg() {
            if (this.newMessage.trim() !== "") {
                const msg = {
                    date: '10/01/2020 15:51:00',
                    message: this.newMessage,
                    status: 'sent'
                };
                this.contacts[this.activeChat].messages.push(msg);
                this.newMessage = '';
                setTimeout(this.replyMsg, 1000);
            }
        },

        replyMsg(){
            const msg = {
                date: '10/01/2020 15:52:00',
                message: 'ok',
                status: 'received'
            };
            this.contacts[this.activeChat].messages.push(msg);
        },
        searchContacts(){
            filter = this.contactsFound.toUpperCase();
            for (i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.toUpperCase().indexOf(filter) > -1) {
                    this.contacts[i].visible = true;
                } else {
                    this.contacts[i].visible = false;
                }
              }
              console.log(filter);
    }

    }

});





/*let contactsFound = this.contactsFound.toUpperCase();
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.toUpperCase().indexOf(this.contactsFound.toUpperCase()) > -1) {
                  this.contacts[i].visible = true;
                } else {
                    this.contacts[i].visible = false;
                }
        }
        console.log(contactsFound);*/