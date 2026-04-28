## 2] Communication

# 1) Short Pollong
    - cleint keep asking to the server give me data
    - after fixed interval of time(setInterval) client continiously fetchapi api (/getData).

    - example - real time system, notification, analytics, cricinfo, version update

    - problem - may extra request to the server
              - increased server load
              - delay (real time nhi)
              - problem in scaling (not good for scalable system)
              - no persistent connection
            
    - usage - small project
            - low traffic
            - simple requirement
            - if the system will not scale in future

# 2) Long Polling
    - Client request bhejta hai, pr server turant response nhi deta... wait krta hai jb tk new dat na aa  
       jaye, jb deta update hota hai tb server response bhejta hai
    - tbtk response ko block krte hai waitinglist array me
    - last data aur new data kon compare krta hai agar change nhi to response nhi bhejeta
    - new data miltehi response ko pop krte hai array se, mtlb update api chalne pr pop action perform 
       krenge
    
# 3) Web Socket
    - client aur server ke bich permanent conection
    - bar bar request bhejne ki jarurat nhi
    - ek bar connection open dono side se data aa ja skta hai

    - flow - browser -> socket.emit -> server -> io.emit -> sbhi browser
             1) client server ko request bhejta hai
             2) server connection open krta hai
             3) connection open rhta hai
             4) jbbhi data change hota hai -> instantly send

    - usage - WhatsApp Chat
            - Stock market live price
            - multiplayer games
            - live cricket score

    - challenges - resource usage
                 - connection limits
                 - sticky session
                 - load balancer
                 - authentication
                 - firewall / proxy
                 - connection drop
                 - scaling
                 - testing / debuging
                 - backward compatibility
                 - resouce cleanup

