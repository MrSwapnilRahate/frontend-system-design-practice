### 1] Networking
        01) How Web Works
                - 
        02) Communication Protocols
                1) HTTP (Hyper Text Transfer Protocol)
                    - TCP Coonection (3 way handshake)
                    - Simple web request, Not Secured (not encrypted data)
                    - TCP <->, HTTP REQ <-> RES
                    - Use => Web Search

                2) HTTP/3 (QUIC)
                    - UDP Connection
                    - Header Compression, Faster, Improved Performance, Better Network Congestion, Encrypted
                    - Use => IOT, VR, Gaming

                3) HTTPS (Hyper Text Transfer Secure)
                    - TCP Connection, Added SSl Layer, Encrypted Data
                    - Privacy, Integrity, Authentication
                    - TCP <->, Public Key <->, Session Key <->, Encrypted Data (HTTP REQ ->, <- RES)
                    - Use => Web Browsing, Login, Payment Gateway

                4) Web Socket
                    - Two Way Communication, HTTP Upgrade, Full Duplex 
                    - TCP <->, (HTTP REQ <-> RES), HTTP Ugrade WebSocket, Full Duplex(Client & Server can send data on single line)
                    - Use => Live Chat, Real Time Data Transition, WhatsApp

                5) TCP (Transmission Controll Protocol)
                    - like asking to server, I'm sending data r u available?
                    - 3 Way HandShake, Server <-> Client,  
                    - SYN ->, <-(SYN + ACK), ACK ->
                    - Accuracy(data) is priority than speed, Data is gauranty nothing lost, Speed can be slow
                    - Use => Web Browsing, Email Protocol

                6) UDP (User Datagram Protocol)
                    - Speed is priority, data can be lost
                    - Use => Video Conferencing, ZOOM Call

                7) SMTP (Simple Mail Transfer Protocol)
                    - Sending receving mail
                    - SMPT Server

                8) FTP (File Transfer Protocol)
                    - Control Channel <->, Data Channel <->
                    - Uploading / Downloading File, Sending file one system to another system

        03) REST API (Reprensentational State Transfer   Application Programing Interface)
                API - used to talk between two programing language or servers (Like Frontend & Backend)

                REST - Set of rules how client & server talk with each other through HTTP
                     - REST give you rules, methods, standards, for building API

                HTTP - defines fundamentals on web how data is going to exchange

                Building Blocks of REST - URL, Methods, Headers, Request, Response, Status Code

                Benifits - Ease of use, stateless(no any prev info, every req is fresh req), Scalability
                         - Felxibilty with data(JSON, XML), uniform interface, Caching, Testing easy, Secure 
                
                URL Parts - https://www.example.com/forum/questions/?tag=networking&order=newest#top
                          - https => schema
                          - www => subdomain
                          - example => domain
                          - .com => top level domian
                          - /forum/questions/ => sub directory (path)
                          ----- till now it is path / directory / path / navigation to reach right place in the code (function / component / folder)
                        
                          - ?tag=networking & order=newest => (parameter (key, value))

                CRUD (Cretae(POST), Read(GET), Update(PUT / PATCH), Delete(DELETE))

                API - http://localhost:3000/api/todos

                Status Code - 
                        2XX (Sucess) - 200(OK), 204(No Content)
                        4XX (Client Error) - 400(Bad Request), 401(Unauthorize), 404(Not Found)
                        5XX (Server Error)- 500(Internal Server Error), 502(Bad Gateway), 503(Server Unavialable), 504(Gateway Time Out), 507(Insufficient Storage)

        04) Graphql (Graph Query Language)
                - Single End Point for All
                - Request Structure - Flexible (Query / Mutation)


        05) gRPC

### 2] Communication
        01) Short Polling - client server continue puchta rhta kuch upodate hai?, setTimer - fixed interval me fetch request continiously
        02) Long Polling - kuch update ho tohi request fetch hogi, response ko array me dalna jbtk new data na aye, atehihi array response pop reqesyt fetc
        03) Web Socket - continious full duplex connection open
        04) Server Side Event (SSE)
        05) Web Hooks