const questions = [
    {
        question: "When a WLAN with WPA2 PSK is configured in the Wireless LAN Controller GUI which format is supported?",
        options: ["A. Unicode", "B. base64", "C. ASCII", "D. decimal"],
        correctAnswers: [2], // Index of "C. ASCII"
    },
    {
        question: "Which networking function occurs on the data plane?",
        options: ["A. facilitates spanning-tree elections", "B. processing inbound SSH management traffic", "C. forward remote client/server traffic", "D. sending and receiving OSPF Hello packets"],
        correctAnswers: [2], // Index of "C. forward remote client/server traffic"
    },
    {
        question: "A network administrator must configure SSH for remote access to router R1. The requirement is to use a public and private key pair to encrypt management traffic to and from the connecting client. Which configuration, when applied, meets the requirements?",
        options: ["A. R1#enable R1#configure terminal R1(config)#ip domain-name cisco.com R1(config)#crypto jey generate ec keysize 1024", "B. R1#enable R1#configure terminal R1(config)# ip domain-name cisco.com R1(config)#crypto key generate rsa modulus 1024", "C. R1#enable R1#configure terminal R1(config)#ip domain-name cisco.com R1(config)#crypto key generate ee keysize 2048", "D. R1#enable R1#configure terminal R1(config)#ip domain-name cisco.com R1(config)#crypto key encrypt rsa name"],
        correctAnswers: [1], // Index of "B. R1#enable R1#configure terminal R1(config)# ip domain-name cisco.com R1(config)#crypto key generate rsa modulus 1024"
    },
    {
        question: "What are two improvements provided by automation for network management in an SDN environment? (Choose two)",
        options: ["A. Data collection and analysis tools establish a baseline for the network", "B. Artificial intelligence identifies and prevents potential design failures", "C. Proprietary Cisco APIs leverage multiple network management tools", "D. Machine learning minimizes the overall error rate when automating troubleshooting processes"],
        correctAnswers: [1, 2], // Indix of "A" and "B"
    },
    {
        question: "An Engineer observes high usage on the 2.4GHz channels and lower usage on the 5GHz channels. What must be configured to allow clients to preferentially use 5GHz access points?",
        options: ["A. 1 lac MU-MIMO", "B. OEAP Split Tunnel", "C. Client Band Select", "D. Re-Anchor Roamed Clients"],
        correctAnswers: [2], // index of "C. Client Band Select"
    },
    {
        question: "What does an SDN controller use as a communication protocol to relay forwarding changes to a southbound API?",
        options: ["A. Java", "B. REST", "C. XML", "D. OpenFlow"],
        correctAnswers: [3], // index of "D. OpenFlow"
    },
    {
       question: "A Network Engineer must configure the router R1 GigabitEthernet1/1 interface to connect to the router R2 GigabitEthernet1/1 interface. For the configuration to be applied the engineer must compress the address 2001:0db8:0000:0000:0500:000a:400F:583B. Which command must be issued on the interface?",
       options: ["A. ipv6 address 2001:db8:0::500:a:4F:583B", "B. ipv6 address 2001:db8::500:a:400F:583B", "C. ipv6 address 2001::db8:0000::500:a:400F:583B", "D. ipv6 address 2001:0db8::5:a:4F:583B"],
       correctAnswers: [1], // index of "B. ipv6 address 2001:db8::500:a:400F:583B"
    },
    {
        question: "An Administrator must secure the WLC from receiving spoofed association request. Which steps must be taken to configure the WLC to restrict the requests and force the user to wait 10 ms to retry an association request?",
        options: ["A. Enable the Protected Management Frame service and set the Comeback timer to 10", "B. Enable Security Association Teardown Protection and set the SA Query timeout to 10", "C. Enable MAC filtering and set the SA Query timeout to 10", "D. Enable 802.1x Layer 2 security and set the Comeback timer to 10"],
        correctAnswers: [0], // index of "A. Enable the Protected Management Frame service and set the Comeback timer to 10"
    },
    {
        question: "What is the benefit of using FHRP?",
        options: ["A. balancing traffic across multiple gateways in proportion to their loads", "B. reduced management overhead on network routers", "C. reduced ARP traffic on the network", "D. higher degree of availability"],
        correctAnswers: [3], // index of "C. reduced ARP traffic on the network", "D. higher degree of availability"
    },
    {
        question: "Which 802.11 management frame type is sent when a client roams between Access Points on the same SSID?",
        options: ["A. Authentication Request", "B. Probe Request", "C. Reassociation Request", "D. Association Request"],
        correctAnswers: [2], // index of "C. Reassociation Request"
    },
    {
        question: "What is a similarity between OM3 and OM4 fiber optic cable?",
        options: ["A Both have a 50 micron core diameter", "B. Both have a 9 micraon core diameter", "C. Boath hace a 62.5 micron diameter", "D. Both have 100 micron core diameter"],
        correctAnswers: [0], // intex of "A Both have a 50 micron core diameter"
    },
    {
        question: "Which protocol does an access point use to draw power from a connected switch?",
        options: ["A. Internet Group Management Protocol", "B. Cisco Discovery Protocol", "C. Adaptive Wireless Patch Protocol", "D. Neighbor Discovery Protocol"],
        correctAnswers: [1], // index of "B. Cisco Discovery Protocol"
    },
    {
        question: "When deploying syslog, which severity level logs information message?",
        options: ["A. 0", "B. 2", "C. 4", "D. 6"],
        correctAnswers: [3], // index of "D. 6 Informational messages"
    },
    {
        question: "Which command must be executed for Gi1/1 on SW1 to become a trunk port if Gi1/1 on SW2 is configured in desirable or trunk mode?",
        image: "image001.jpg",
        options: ["A.switchport mode trunk", "B. switchport mode dot1-tunnel", "C. switchport mode dynamic auto", "D. switchport mode dynamic desirable"],
        correctAnswers: [3], //index of "D. switchport mode dynamic desirable"
    },
    {
        question: "An engineer must configure GigabitEthernet1/1 to accommodate voice and data traffic. Which configuration accomplishes this task?",
        image: "image002.jpg",
        options: ["A. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 300 #switchport voice vlan 400", "B. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 400 #switchport voice vlan 300", "C. #interface gigabitethernet1/1 #switchport mode trunk #switchport access vlan 300 #switchport voice vlan 400", "D. #interface gigabitethernet1/1 #switchport mode trunk #switchport trunk vlan 300 #switchport trunk vlan 400"],
        correctAnswers: [0], //index of "A. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 300 #switchport voice vlan 400"
    },
    {
        question: "What describes the operation of virtual machines?",
        options: ["A. Virtual machines are responsible for managing and allocating host hardware resources", "B. Virtual machines are operating system instances that are decouped from server hardware", "C. Virtual machines are the physical hardware that support a virtual environment", "D. In a virtual machine environment, physical servers must run one operating system at a time"],
        correctAnswers: [0], //index of "A. Virtual machines are responsible for managing and allocating host hardware resources"
    },
    {
        question: "What is a role of access points in an enterprise network?",
        options: ["A. connect wireless devices to a wired network", "B. support secure user logins to devices or the network", "C. integrate with SNMP in preventing DDoS attacks", "D. serve as a first line of defense in an enterprise network"],
        correctAnswers: [0], //index of "A. connect wireless devices to a wired network"
    },
    {
        question: "shortly after Site A was connected to Site B over a new single-mode fiber path, user at Site A report intermittent connectivity issues with applications hosted at site B. What is the cause of the intermittent connectivity issue?",
        image:"image003.jpg",
        options: ["A. Interface errors are incrementing", "B. An incorrect SFP media type was used at Site A", "C. High usage is causing high latency", "D. The sites were connected with the wrong cable type"],
        correctAnswers:[0], //index of "A. Interface errors are incrementing"
    },
    {
        question: "Which switch becomes the permanent root bridge for VLAN 5?",
        image: "image004.jpg",
        options: ["A. Branch-1", "B. Branch-2", "C. Branch-3", "D. Branch-4"],
        correctAnswers: [2], //index of "C. Branch-3" priority 0
    },
    {
        question: "The entire contents of the MAC address table are shown. Sales-4 sends a data frame to Sales-1. What does the switch do as it receives the frame from Sales-4?",
        image: "image005.jpg",
        options: ["A. Map the Layer 2 MAC address to the Layer 3 IP address and forward the frame", "B. Insert the source MAC address and port into the forwarding table and forward the frame to Sales-1", "C. Perform a lookup in the MAC address table and discard the frame due to a missing entry", "D. Flood the frame out of all ports except on the port where Sales-1 is connected"],
        correctAnswers: [1], //index of "B. Insert the source MAC address and port into the forwarding table and forward the frame to Sales-1"
    },
    {
        question: "Which technology allows for multiple operating systems to be run on a signle host computer?",
        options: ["A. virtual device contex", "B. network port ID visualization", "C. virtual routing and Forwarding", "D. server virtualization"],
        correctAnswers: [3], //index of "D. server virtualization"
    },
    {
       question: "An administrator must turn off the Cisco Discovery Protocol on the port configured with last usable address in the 10.0.0.0/30 subnet. Which command set meets the requirement?",
       image: "image006.jpg",
       options: ["A. #interface gi0/1 #no cdp enable", "B. #interface gi0/1 #clear cdp table", "C. #interface gi0/0 #no cdp run", "D. #interfacegi0/0 #no cdp advertise-v2"],
       correctAnswers: [2], //index of "C. #interface gi0/0 #no cdp run"
    },
    {
        question: "Which two QoS tools provides congestion management? (choose two)",
        options: ["A. FRTS", "B. CAR", "C. PQ", "D. PBR", "E. CBWFQ"],
        correctAnswers: [2,4], //index of "C. PQ" & "D. PBR", "E. CBWFQ"
    },
    {
        question: "What occurs when overlapping Wi-Fi channels are implemented?",
        options: ["A. The wireless network becomes vulnerable to unauthorized access", "B. Wireless devices are unable to distinguish between different SSIDs", "C. Network communications are open to eavesdropping", "D. Users experience poor wireless network performance"],
        correctAnswers: [3], //index of "D. Users experience poor wireless network performance"
    },
    {
        question: "Which JSON data type is an unordered set of attribute-value pairs?",
        options: ["A. array", "B. string", "C. object", "D. Boolean"],
        correctAnswers: [2], //index of "C. object"
    },
    {
        question: "An engineer needs to add an old switch back into a network. To prevent the switch from corrupting the VLAN database which action must be taken?",
        options: ["A. Add the switch in the VTP domain with a lower revision number", "B. Add the switch in the VTP domain with a higher revision number", "C. Add the switch with DTP set to dynamic desirable", "D. Add the switch with DTP set to desirable"],
        correctAnswers: [2], //index of "C. Add the switch with DTP set to dynamic desirable"
    },
    {
        question: "Which WLC port connects to a switch to pass normal access-point traffic?",
        options: ["A. distribution system", "B. service", "C. redundancy", "D. console"],
        correctAnswers: [0], //index of "A. distribution system"
    },
    {
        question: "Which two QoS tools are used to guarantee minimum bandwidth to certain traffic? (choose two)",
        options: ["A. FIFO", "B. CBWFQ", "C. LLC", "D. WFQ", "E. RSVP"],
        correctAnswers: [1, 3], //index of "B. CBWFQ" & "D. WFQ"
    },
    {
       question: "Which type of security program is violated when a group of employess enters a building using the ID badge of only one person?",
       options: ["A. intrusion detection", "B. user awareness", "C. physical access control", "network authorization"],
       correctAnswers: [2], //index of "C. physical access control" 
    },
    {
        question: "A network administrator needs to aggregate 4 ports into a single logical link wich must negotiate layer 2 connectivity to ports on another switch. What must be configured when using active mode on both sides of the connection?",
        options: ["A. 802.1q trunks", "B. Cisco vPC", "C LLDP", "D. LACP"],
        correctAnswers: [2], //index of "C LLDP
    },
    {
        question: "In which situation is private IPv4 addressing appropiate for a new subnet on the network of an organization?",
        options: ["A. There is limited unique address space, and traffic on the new subnet will stay local within the organization", "B. The network has multiple endpoint listeners, and it is desired to limit the number of broadcasts", "C. Traffic on the subnet must traverse a site-to-site VPN to an outside organization", "D. The ISP requires the new subnet to be advertised to the internet for web services"],
        correctAnswers: [0], //index of "A. There is limited unique address space, and traffic on the new subnet will stay local within the organization"
    },
    {
        question: "Aside from discarding, which two states the switch port transition through while using RSTP (802.1w)? (choose two)",
        options: ["A. listening", "B. blocking", "C. forwarding", "D. learning", "E. speaking"],
        correctAnswers: [2, 3], //index of "C. forwarding" & "D. learning"
    },
    {
        question: "What is a role of wireless controllers in an enterprise network?",
        options: ["A. serve as the first line of defense in an enterprise network", "B. support standalone or controller-based architectures", "C. centralize the management of access points in an enterprise network", "D. provide secure user logins to devices on the network"],
        correctAnswers: [2], //index of "C. centralize the management of access points in an enterprise network"
    },
    {
        question: "How do servers connect to the network in a virtual environment?",
        options: ["A. wireless to an access point that is physically connected to the network", "B. a cable connected to a physical switch on the network", "C. a virtual switch that links to an access point that is physically connected to the network", "D. a software switch on a hypervisor that is physically connected to the network"],
        correctAnswers: [3], //index of "D. a software switch on a hypervisor that is physically connected to the network"
    },
    {
        question: "Which CRUD operation corresponds to the HTTP GET method?",
        options: ["A. read", "B. update", "C. create", "D. delete"],
        correctAnswers: [0], // index of "A. read"
    },
    {
        question: "With REST API, which standard HTTP header tells a server which media type is expected by the client?",
        options: ["A. Accept-Encoding: gzip, deflate", "B. Accept-Patch: text/example; charset=utf-8", "C. Content-Type: application/json; charset=utf-8", "D. Accept: application/json"],
        correctAnswers: [3], //index of "D. Accept: application/json"
    },
    {
        question: "Which device tracks the state of active connections in order to make a decision to forward a packet through?",
        options: ["A. Firewall", "B. wireless access point", "C. router", "D. wireless LAN controller"],
        correctAnswers: [0], //index of "A. Firewall"
    },
    {
        question: "Which device controls the forwarding of authentication requests for users when connecting to the network using a lightweight access point?",
        options: ["A. TACACS server", "B. wireless access point", "C. RASIUS server", "D. wireless LAN controller"],
        correctAnswers: [3], //index of "D. wireless LAN controller"
    },
    {
        question: "A network administrator must enable DHCP services between two sites. What must be configured for the router to pass DHCPDISCOVER message on to the server?",
        options: ["A. a DHCP Relay Agent", "B. DHCP Binding", "C. a DHCP Pool", "D. DHCP Snooping"],
        correctAnswers: [0], //index of "A. a DHCP Relay Agent"
    },
    {
        question: "Refer to the exhibit. PC1 is trying to ping PC3 for the first time and sends out an ARP to S1. Which action is taken by S1?",
        image: "image007.jpg",
        options: ["A. It forwards it out G0/3 only", "B. It is flooded out every port except G0/0", "C. It drops the frame", "D. It forwards it out interface G0/2 only"],
        correctAnswers: [1], //index of "B. It is flooded out every port except G0/0"
    },
    {
        question: "Refer to the exhibit. What is the result if Gig1/11 receives an STP BPDU?",
        image: "image008.jpg",
        options: ["A. The port transitions to STP blocking", "B. The pport transitions to the root port", "C. The port immediately transitions to STP forwarding", "D. The port goes into error-disable state"],
        correctAnswers: [3], //index of "D. The port goes into error-disable state"
    },
    {
        question: "An engineer must configure traffic for a VLAN that is untagged by the switch as it crosses a trunk link. Which command should be used?",
        options: ["A. #switchport trunk allowed vlan 10", "B. #switchport trunk native vlan 10", "C. switchport mode trunk", "D. switchport encapsulation dot1q"],
        correctAnswers: [1], //index of "B. #switchport trunk native vlan 10"
    },
    {
        question: "What is the maximum bandwidth of a T1 point-to-pont connection?",
        options: ["A. 1.544 Mbps", "B. 2.048 Mbps", "C. 34.368 Mbps", "D. 43.7 Mbps"],
        correctAnswers: [0], //index of "A. 1.544 Mbps"
    },
    {
        question: "How does a Cisco Unified Wireless network respond to Wi-Fi channel overlap?",
        options: ["A. It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points", "B. It allows the administrator to assign channels on a per-device or per-interface basis", "C. It segregates devices from different manufacturers onto different channels", "D. It analyzes client load and background noise and dynamically assigns a channel"],
        correctAnswers: [0], //index of "A. It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points"
    },
    {
        question: "What does a switch use to build its MAC address table?",
        options: ["A. VTP", "B. DTP", "C. egress traffic", "D. ingress traffic"],
        correctAnswers: [3], //index of "D. ingress traffic"
    },
    {
        question: "Which network plane is centralized and manages routing decisions?",
        options: ["A. policy plane", "B. control plane", "C. management plane", "D. data plane"],
        correctAnswers: [1], //index of "B. control plane"
    },
    {
        question: "What does a router do when configured with the default DNS lookup settings, and a URL is entered on the CLI?",
        options: ["A. initiates a ping request to the URL", "B. prompts the user to specify the desired IP address", "C. continuously attempts to resolve the URL until the command is cancelled", "D. sends a broadcast message in an attempt to resolve the URL"],
        correctAnswers: [3], //index of "D. sends a broadcast message in an attempt to resolve the URL"
    },
    {
        question: "which switch becomes the root of the spanning tree for VLAN 110?",
        image: "image009.jpg",
        options: ["A. Switch 1", "B. Switch 2", "C. Switch 3", "D. Switch 4"],
        correctAnswers: [1], //index of "B. Switch 2"
    },
    {
        question: "An administrator must confiogure interfaces Gi1/1 and Gi1/3 on switch SW11 PC-1 and PC-2 must be placed in the Data VLAN and Phone-1 must be placed in the Voice VLAN. Which configuration meets these requirements?",
        image: "image010.jpg",
        options: ["A. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 8 ! #interface gigabitethernet1/3 #switchport mode access #switchport voice vlan 8 #switchport access vlan 9", "B. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 9 ! #interface gigabitethernet1/3 #switchport mode trunk #switchport voice vlan 8 #switchport access vlan 9", "C. #interface gigabitethernmet1/1 #switchport mode access #switchport access vlan 8 ! #interface gigabitethernet1/3 #switchport mode access #switchport access vlan 8 #switchport voice vlan 9", "D. #interface gigabitethernet1/1 #switchport mode access #switchport access vlan 8 ! #interface gigabitethernet1/3 #switchport mode trunk # switchport voice vlan 8 #switchport access vlan 9"],
        correctAnswers: [2], //index of "C. Option C"
    },
    {
        question: "Which configuration must be applied to the router that configures PAT to translate all addresses in VLAN 200 while allowing devices on VLAN 100 to use their own IP address?",
        image: "image011.jpg",
        image: "image012.jpg",
        options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
        correctAnswers: [3], //index of "D. Option D"
    },
    {
        question: "What term is used to define the software process that creates VMs and performs hardware abstraction to support VMs?",
        options: ["A. Hypervisor", "B. container", "C. element manager", "D. Virtualized Infrastructure Manager (VIM)"],
        correctAnswers: [0], //index of "A. Hypervisor"
    },
    {
        question: "Which statement is true regarding the UDP client process during a session with a server?",
        options: ["A. Datagrams that arrive in a different order than that in which they were sent are not placed in order", "B. A session must be established before datagrams can be exchanged", "C. A three-way handshake takes place before the transmission of data begins", "D. Application servers have to use port numbers above 1024 in order to be UDP capable"],
        correctAnswers: [0], //index of "A. Datagrams that arrive in a different order than that in which they were sent are not placed in order"
    },
    {
        question: "Which forwarding action does a switch take when the destination MAC address of an Ethernet frame is an unknown unicast?",
        options: ["A. The switch forwards the frame out a specified port for this type of address", "B. The switch drops the frame", "C. The switch forwards the frame to the default gateway", "D. The switch forwards the frame the same way it does for broadcast and multicast MAC addresses"],
        correctAnswers: [3], //index of "D. The switch forwards the frame the same way it does for broadcast and multicast MAC addresses"
    },
    {
        question: "What information is added during encapsulation at OSI Layer 3?",
        options: ["A. source and destination MAC", "B. source and destination application protocol", "C. source and destination port number", "D. source and destination IP address"],
        correctAnswers: [3], //index of "D. source and destination of IP address"
    },
    {
        question: "Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
        options: ["A. VTY interface", "B. console interface", "C. Ethernet interface", "D. boot IOS mode", "E. privileged EXEC mode", "F. router configuration mode"],
        correctAnswers: [0, 1, 4], //index of "A. VTY interface" "B. console interface" "E. privileged EXEC mode"
    },
    {
        question: "Which two statements are true regarding the user EXEC mode? (Choose two.)",
        options: ["A. All router commands are available", "B. Global configuration mode can be accessed by entering the enable command", "C. The device prompt for this mode ends with the '>' symbol", "D. Interfaces and routing protocols can be configured", "E. Only some aspects of the router configuration can be viewed"],
        correctAnswers: [2, 4], //index of "C. The device prompt for this mode ends with the '>' symbol" "E. Only some aspects of the router configuration can be viewed"
    },
    {
        question: "Why does HTTP use TCP as the transport layer protocol?",
        options: ["A. to ensure the fastest possible download speed", "B. because HTTP is a best-effort protocol", "C. because transmission errors can be tolerated easily", "D. because HTTP requires reliable delivery"],
        correctAnswers: [3], //index of "D. because HTTP requires reliable delivery"
    },
    {
        question: "What is the purpose of ICMP messages?",
        options: ["A. to inform routers about network topology changes", "B. to ensure the delivery of an IP packet", "C. to provide feedback of IP packet tansmissions", "D. to monitor the process of a domain name to IP address resolution"],
        correctAnswers: [2], //index of "C. to provide feedback of IP packet tansmissions"
    },
    {
        question: "How many bits make up an octet in an IPv4 address?",
        options: ["A. 4", "B. 8", "C. 16", "D. 32"],
        correctAnswers: [1], //index of "B. 8 bits"
    },
    {
        question: "A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)",
        options: ["A. DHCPDISCOVER", "B. DHCPOFFER", "C. DHCPREQUEST", "D. DHCPACK", "E. DHCPNACK"],
        correctAnswers: [0,2], //index of "A. DHCPDISCOVER" "C. DHCPREQUEST"
    },
    {
        question: "A network technician is statically assigning an IP address to a PC. The default gateway is correct. What would be a valid IP address to assign to the host?",
        image: "image013.jpg",
        options:["A. 128.106.10.100", "B. 128.107.255.1", "C. 128.107.255.1", "D. 128.107.255.254"],
        correctAnswers: [2], //index of "C. 128.107.255.1"
    },
    {
        question: "Which two characteristics describe Ethernet technology? (Choose two.)",
        options: ["A. It is supported by IEEE 802.3 standards", "B. It is supported by IEEE 802.5 standards", "C. It typically uses an average of 16 Mbps for data transfer rates", "D.  It uses unique MAC addresses to ensure that data is sent to the appropriate destination", "E. It uses a ring topology"],
        correctAnswers: [0, 3], //
    },
    {
        question: "What subnet mask would be associated with the IPv4 prefix of /28?",
        options: ["A. 255.255.255.0", "B. 255.255.255.224", "C. 255.255.255.240", "D. 255.255.255.248", "E. 255.255.255.252"],
        correctAnswers: [2], //index of "C. 255.255.255.240"
    },
    {
        question: "What statement describes the function of the Address Resolution Protocol?",
        options: ["A. ARP is used to discover the IP address of any host on a different network", "B. ARP is used to discover the IP address of any host on the local network", "C. ARP is used to discover the MAC address of any host on a different network", "D. ARP is used to discover the MAC address of any host on the local network"],
        correctAnswers: [3], //index of "D. ARP is used to discover the MAC address of any host on the local network"
    },
    {
        question: "Which three IPv4 packet header fields are used to identify and validate the IP packet? (Choose three.)",
        options: ["A. Fragment Offset", "B. Flags", "C. Header Checksum","D. Time-to-Live", "E. Total Length", "F. Identification"],
        correctAnswers: [0, 1, 5],
    },
    {
        question: "Which statement regarding the service password-encryption command is true?",
        options: ["A. It is configured in privileged EXEC mode", "B. It encrypts only line mode passwords", "C. As soon as the service password-encryption command is entered, all currently set passwords formerly displayed in plain text are encrypted", "D. To see the passwords encrypted by the service password-encryption command in plain text, issue the no service password-encryption command"],
        correctAnswers: [2], //index of "C. As soon as the service password-encryption command is entered, all currently set passwords formerly displayed in plain text are encrypted"
    },
    {
        question: "What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?",
        options: ["A. spource MAC address", "B. source IP address", "C. destination MAC address", "D. Ethernet type", "E. destination IP address"],
        correctAnswers: [2], //index of "C. destination MAC address"
    },
    {
        question: "The image shows the UDP segment header. What is the correct sequence of the four fields?",
        image: "image014.jpg",
        options: ["A. destination port, source port, length, checksum", "B. source port, destination port, length, checksum", "C. destination port, source port, checksum, length", "D. source port, destination port, checksum, length"],
        correctAnswers: [1], //index of "B. source port, destination port, length, checksum"
    },
    {
        question: "What is an example of cloud computing?",
        options: ["A. a continuous interaction between people, processes, data, and things", "B. a service that offers on-demand access to shared resources", "C. a network infrastructure that spans a large geographic area", "D. an architectural style of the World Wide Web"],
        correctAnswers: [1], //index of "B. a service that offers on-demand access to shared resources"
    },
    {
        question: "Which ICMPv6 message type provides network addressing information to hosts that use SLAAC?",
        options: ["A. neighbor solicitation", "B. router advertisement", "C. neighbor advertisement", "D. Router solicitation"],
        correctAnswers: [1], //index of "B. router advertisement"
    },
    {
        question: "How does a switch process a frame received on Fa0/1 with the destination MAC address of 0e38.7363.657b when the table is missing the address?",
        options: ["A. It floods the frame to all interfaces except Fa0/1", "B. It forwards the frame back out of interface Fa0/1", "C. It drops the frame immediately", " D. Itholds the frame until the MAC address timer expires and then drops the frame"],
        correctAnswers: [0], //index of "A. It floods the frame to all interfaces except Fa0/1"
    },
    {
        question: "What is a benefit of VRRP?",
        options: ["A. It provides traffic load balancing to destinations that are more than two hops from the source", "B. It provides the default gateway redundancy on a LAN using two or more routers", "C. It allows neighbors to share routing table information between each other", "D. It prevents loops in a Layer 2 LAN by forwarding all traffic to a root bridge, which then makes the final forwarding decision"],
        correctAnswers: [1], //index of "B. It provides the default gateway redundancy on a LAN using two or more routers"
    },
    {
        question: "Which protocol does an IPv4 host use to obtain a dynamically assigned IP address?",
        options: ["A. ARP", "B. DNS", "C. CDP", "D. DHCP"],
        correctAnswers: [3], //index of "D. DHCP"
    },
    {
        question: "An access list is required to permit traffic from any host on interface G0/0 and deny traffic from interface Gi0/1. Which access list must be applied?",
        image: "image015.jpg",
        options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
        correctAnswers: [0], //index of "A. Option A"
    },
    {
        question: "Which condition must be met before an NMS handles an SNMP trap from an agent?",
        options: ["A. The NMS must be configured on the same router as the SNMP agent", "B. The NMS must receive a trap and an inform message from the SNMP agent within a configured interval", "C. The NMS software must be loaded with the MIB associated with the trap", "D. The NMS must receive the same trap from two different SNMP agents to verify that it is reliable"],
        correctAnswers: [2], //index of "C. The NMS software must be loaded with the MIB associated with the trap"
    },
    {
        question: "what is a characteristic of a SOHO network?",
        options: ["A. connects each switch to every other switch in the network", "B. enables multiple users to share a single broadband connection", "C. provides high throughput access for 1000 or more users", "D. includes at least three tiers of devices to provide load balancing and redundancy"],
        correctAnswers: [1], //"B. enables multiple users to share a single broadband connection"
    },
    {
        question: "Which resource is able to be shared among virtual machines deployed on the same physical server?",
        options: ["A. applications", "B. operating system", "C. VM configuration file", "D. disk"],
        correctAnswers: [3], //index of "D. disk"
    },
    {
        question: "Which implementation provides the strongest encryption combination for the wireless environment?",
        options: ["A. WPA2+AES", "B. WPA+AES", "C. WEP", "D. WPA+TKIP"],
        correctAnswers: [0], //index of "A. WPA2+AES"
    },
    {
        question: "After running the code in the exhibit, which step reduces the amount of data that the NETCONF server returns to the NETCONF client, to only the interface's configuration?",
        image: "image016.jpg",
        options: ["A. Use the xml library to parse the data returned by the NETCONF server for the interface's configuration", "B. Create an XML filter as a string and pass it to get_config() method as an argument","C. Create a JSON filter as a string and pass it to the get_config() method as an argument", "D. Use the JSON library to parse the data returned by the NETCONF server for the interface's configuration"],
        correctAnswers: [3], //index of "D. Use the JSON library to parse the data returned by the NETCONF server for the interface’s configuration"
    },
    {
        question: "What are two functions of an SDN controller? (Choose two)",
        options: ["A. coordinating VTNs", "B. Layer 2 forwarding", "C. tracking hosts", "D. managing the topology", "E. protecting against DDoS attacks"],
        correctAnswers: [0, 3], //index of "A. and D."
    },

    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let timerInterval;
let selectedAnswers = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.classList.add("fade-out");

    setTimeout(() => {
        const questionText = document.getElementById("question");
        const optionsContainer = document.getElementById("options");
        const message = document.getElementById("message");
        const continueButton = document.getElementById("continue-btn");
        const correctAnswerElement = document.getElementById("correct-answer");
        const questionImage = document.getElementById("question-image");
        const questionNumber = document.getElementById("question-number");
        const questionIndex = document.getElementById("question-index");

        questionText.textContent = questions[currentQuestion].question;
        optionsContainer.innerHTML = "";

        // Set the image source and display it
        if (questions[currentQuestion].image) {
            questionImage.src = "images/"+ questions[currentQuestion].image;
            questionImage.style.display = "block";
        } else {
            questionImage.style.display = "none";
        }

        questions[currentQuestion].options.forEach((option, index) => {
            const optionElement = document.createElement("button");
            optionElement.textContent = option;
            optionElement.addEventListener("click", () => selectAnswer(index, optionElement));
            optionsContainer.appendChild(optionElement);
        });

        selectedAnswers = [];
        message.textContent = ""; // Clear previous message
        correctAnswerElement.style.display = "none"; // Hide correct answer message
        continueButton.style.display = "none"; // Hide continue button

        questionNumber.textContent = `Question ${currentQuestion + 1}`;
        questionIndex.textContent = `${currentQuestion + 1}/${questions.length}`;

        questionContainer.classList.remove("fade-out");
        questionContainer.classList.add("fade-in");
    }, 300); // Duration of fade-out effect
}

function selectAnswer(index, optionElement) {
    if (selectedAnswers.includes(index)) {
        selectedAnswers = selectedAnswers.filter(i => i !== index); // Deselect if already selected
        optionElement.classList.remove("selected");
    } else {
        selectedAnswers.push(index);
        optionElement.classList.add("selected");
    }

    if (selectedAnswers.length === questions[currentQuestion].correctAnswers.length) {
        checkAnswer();
    }
}

function checkAnswer() {
    const correctAnswers = questions[currentQuestion].correctAnswers;
    const message = document.getElementById("message");
    const correctAnswerElement = document.getElementById("correct-answer");
    const continueButton = document.getElementById("continue-btn");

    if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(val => correctAnswers.includes(val))) {
        message.textContent = "Yesss! Exactly!";
        score++;
        setTimeout(() => {
            nextQuestion();
        }, 1000); // Proceed to the next question after 1 second
    } else {
        message.textContent = "I'm afarid that's not quite right.";
        correctAnswerElement.textContent = `The correct answers is: ${correctAnswers.map(index => questions[currentQuestion].options[index]).join(", ")}`;
        correctAnswerElement.style.display = "block"; // Show correct answer
        continueButton.style.display = "block"; // Show continue button
    }

    document.getElementById("score").textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Quiz completed
        clearInterval(timerInterval); // Stop the timer
        document.getElementById("message").textContent = "Exams over, stress buster activated!";
        document.getElementById("continue-btn").disabled = true; // Disable continue button after quiz completion
    }
}

document.getElementById("continue-btn").addEventListener("click", nextQuestion);

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    shuffle(questions); // Shuffle questions before starting the quiz
    startTimer(3600); // 3600 seconds = 1 hour
    displayQuestion();
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").textContent = `Time Left: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval);
            document.getElementById("message").textContent = "Time's up foo! You are the weakest link, good bye!";
            document.getElementById("continue-btn").disabled = true; // Disable continue button after time's up
        }
    }, 1000);
}
