var searchIndex = {};
searchIndex["ssh2"] = {"doc":"Rust bindings to libssh2, an SSH client library.","items":[[3,"Agent","ssh2","A structure representing a connection to an SSH agent.",null,null],[3,"Identities","","An iterator over the identities found in an SSH agent.",null,null],[3,"PublicKey","","A public key which is extracted from an SSH agent.",null,null],[3,"Channel","","A channel represents a portion of an SSH connection on which data can be read and written.",null,null],[3,"ExitSignal","","Data received from when a program exits with a signal.",null,null],[12,"exit_signal","","The exit signal received, if the program did not exit cleanly. Does not contain a SIG prefix",0,null],[12,"error_message","","Error message provided by the remote server (if any)",0,null],[12,"lang_tag","","Language tag provided by the remote server (if any)",0,null],[3,"ReadWindow","","Description of the read window as returned by `Channel::read_window`",null,null],[12,"remaining","","The number of bytes which the remote end may send without overflowing the window limit.",1,null],[12,"available","","The number of bytes actually available to be read.",1,null],[12,"window_size_initial","","The window_size_initial as defined by the channel open request",1,null],[3,"WriteWindow","","Description of the write window as returned by `Channel::write_window`",null,null],[12,"remaining","","The number of bytes which may be safely written on the channel without blocking.",2,null],[12,"window_size_initial","","The window_size_initial as defined by the channel open request",2,null],[3,"Stream","","A channel can have a number of streams, each identified by an id, each of which implements the `Read` and `Write` traits.",null,null],[3,"Error","","Representation of an error that can occur within libssh2",null,null],[3,"KnownHosts","","A set of known hosts which can be used to verify the identity of a remote server.",null,null],[3,"Hosts","","Iterator over the hosts in a `KnownHosts` structure.",null,null],[3,"Host","","Structure representing a known host as part of a `KnownHosts` structure.",null,null],[3,"Listener","","A listener represents a forwarding port from the remote server.",null,null],[3,"Session","","An SSH session, typically representing one TCP connection.",null,null],[3,"ScpFileStat","","Metadata returned about a remote file when received via `scp`.",null,null],[3,"Sftp","","A handle to a remote filesystem over SFTP.",null,null],[3,"OpenFlags","","Options that can be used to configure how a file is opened",null,null],[3,"File","","A file handle to an SFTP connection.",null,null],[3,"FileStat","","Metadata information about a remote file.",null,null],[12,"size","","File size, in bytes of the file.",3,null],[12,"uid","","Owner ID of the file",3,null],[12,"gid","","Owning group of the file",3,null],[12,"perm","","Permissions (mode) of the file",3,null],[12,"atime","","Last access time of the file",3,null],[12,"mtime","","Last modification time of the file",3,null],[3,"FileType","","An structure representing a type of file.",null,null],[3,"RenameFlags","","Options to `Sftp::rename`",null,null],[4,"OpenType","","How to open a file handle with libssh2.",null,null],[13,"File","","Specify that a file shoud be opened.",4,null],[13,"Dir","","Specify that a directory should be opened.",4,null],[4,"DisconnectCode","","",null,null],[13,"HostNotAllowedToConnect","","",5,null],[13,"ProtocolError","","",5,null],[13,"KeyExchangeFailed","","",5,null],[13,"Reserved","","",5,null],[13,"MacError","","",5,null],[13,"CompressionError","","",5,null],[13,"ServiceNotAvailable","","",5,null],[13,"ProtocolVersionNotSupported","","",5,null],[13,"HostKeyNotVerifiable","","",5,null],[13,"ConnectionLost","","",5,null],[13,"ByApplication","","",5,null],[13,"TooManyConnections","","",5,null],[13,"AuthCancelledByUser","","",5,null],[13,"NoMoreAuthMethodsAvailable","","",5,null],[13,"IllegalUserName","","",5,null],[4,"HostKeyType","","",null,null],[13,"Unknown","","",6,null],[13,"Rsa","","",6,null],[13,"Dss","","",6,null],[4,"MethodType","","",null,null],[13,"Kex","","",7,null],[13,"HostKey","","",7,null],[13,"CryptCs","","",7,null],[13,"CryptSc","","",7,null],[13,"MacCs","","",7,null],[13,"MacSc","","",7,null],[13,"CompCs","","",7,null],[13,"CompSc","","",7,null],[13,"LangCs","","",7,null],[13,"LangSc","","",7,null],[4,"HashType","","",null,null],[13,"Md5","","",8,null],[13,"Sha1","","",8,null],[4,"KnownHostFileKind","","",null,null],[13,"OpenSSH","","",9,null],[4,"CheckResult","","Possible results of a call to `KnownHosts::check`",null,null],[13,"Match","","Hosts and keys match",10,null],[13,"Mismatch","","Host was found, but the keys didn't match!",10,null],[13,"NotFound","","No host match was found",10,null],[13,"Failure","","Something prevented the check to be made",10,null],[4,"KnownHostKeyFormat","","",null,null],[13,"Rsa1","","",11,null],[13,"SshRsa","","",11,null],[13,"SshDss","","",11,null],[5,"init","","Initialize the libssh2 library.",null,{}],[11,"connect","","Connect to an ssh-agent running on the system.",12,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"disconnect","","Close a connection to an ssh-agent.",12,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"list_identities","","Request an ssh-agent to list of public keys, and stores them in the internal collection of the handle.",12,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"identities","","Get an iterator over the identities of this agent.",12,{"i":[{"n":"self"}],"o":{"n":"identities"}}],[11,"userauth","","Attempt public key authentication with the help of ssh-agent.",12,{"i":[{"n":"self"},{"n":"str"},{"n":"publickey"}],"o":{"g":["error"],"n":"result"}}],[11,"drop","","",12,{"i":[{"n":"self"}]}],[11,"next","","",13,{"i":[{"n":"self"}],"o":{"g":["result"],"n":"option"}}],[11,"blob","","Return the data of this public key.",14,null],[11,"comment","","Returns the comment in a printable format",14,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"clone","","",1,{"i":[{"n":"self"}],"o":{"n":"readwindow"}}],[11,"clone","","",2,{"i":[{"n":"self"}],"o":{"n":"writewindow"}}],[11,"setenv","","Set an environment variable in the remote channel's process space.",15,{"i":[{"n":"self"},{"n":"str"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"request_pty","","Request a PTY on an established channel.",15,{"i":[{"n":"self"},{"n":"str"},{"g":["str"],"n":"option"},{"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"request_pty_size","","Request a PTY of a specified size",15,{"i":[{"n":"self"},{"n":"u32"},{"n":"u32"},{"g":["u32"],"n":"option"},{"g":["u32"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"exec","","Execute a command",15,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"shell","","Start a shell",15,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"subsystem","","Request a subsystem be started.",15,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"process_startup","","Initiate a request on a session type channel.",15,{"i":[{"n":"self"},{"n":"str"},{"g":["str"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"stderr","","Get a handle to the stderr stream of this channel.",15,{"i":[{"n":"self"}],"o":{"n":"stream"}}],[11,"stream","","Get a handle to a particular stream for this channel.",15,{"i":[{"n":"self"},{"n":"i32"}],"o":{"n":"stream"}}],[11,"exit_status","","Returns the exit code raised by the process running on the remote host at the other end of the named channel.",15,{"i":[{"n":"self"}],"o":{"g":["i32","error"],"n":"result"}}],[11,"exit_signal","","Get the remote exit signal.",15,{"i":[{"n":"self"}],"o":{"g":["exitsignal","error"],"n":"result"}}],[11,"read_window","","Check the status of the read window.",15,{"i":[{"n":"self"}],"o":{"n":"readwindow"}}],[11,"write_window","","Check the status of the write window.",15,{"i":[{"n":"self"}],"o":{"n":"writewindow"}}],[11,"adjust_receive_window","","Adjust the receive window for a channel by adjustment bytes.",15,{"i":[{"n":"self"},{"n":"u64"},{"n":"bool"}],"o":{"g":["u64","error"],"n":"result"}}],[11,"eof","","Check if the remote host has sent an EOF status for the selected stream.",15,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"send_eof","","Tell the remote host that no further data will be sent on the specified channel.",15,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"wait_eof","","Wait for the remote end to send EOF.",15,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"close","","Close an active data channel.",15,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"wait_close","","Enter a temporary blocking state until the remote host closes the named channel.",15,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"write","","",15,null],[11,"flush","","",15,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"read","","",15,null],[11,"drop","","",15,{"i":[{"n":"self"}]}],[11,"read","","",16,null],[11,"write","","",16,null],[11,"flush","","",16,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"fmt","","",17,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"last_error","","Generate the last error that occurred for a `Session`.",17,{"i":[{"n":"session"}],"o":{"g":["error"],"n":"option"}}],[11,"new","","Create a new error for the given code and message",17,{"i":[{"n":"c_int"},{"n":"str"}],"o":{"n":"error"}}],[11,"eof","","Generate an error that represents EOF",17,{"o":{"n":"error"}}],[11,"unknown","","Generate an error for unknown failure",17,{"o":{"n":"error"}}],[11,"from_errno","","Construct an error from an error code from libssh2",17,{"i":[{"n":"c_int"}],"o":{"n":"error"}}],[11,"message","","Get the message corresponding to this error",17,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"code","","Return the code for this error",17,{"i":[{"n":"self"}],"o":{"n":"c_int"}}],[11,"fmt","","",17,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"description","","",17,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"from","","",17,{"i":[{"n":"nulerror"}],"o":{"n":"error"}}],[11,"read_file","","Reads a collection of known hosts from a specified file and adds them to the collection of known hosts.",18,{"i":[{"n":"self"},{"n":"path"},{"n":"knownhostfilekind"}],"o":{"g":["u32","error"],"n":"result"}}],[11,"read_str","","Read a line as if it were from a known hosts file.",18,{"i":[{"n":"self"},{"n":"str"},{"n":"knownhostfilekind"}],"o":{"g":["error"],"n":"result"}}],[11,"write_file","","Writes all the known hosts to the specified file using the specified file format.",18,{"i":[{"n":"self"},{"n":"path"},{"n":"knownhostfilekind"}],"o":{"g":["error"],"n":"result"}}],[11,"write_string","","Converts a single known host to a single line of output for storage, using the 'type' output format.",18,{"i":[{"n":"self"},{"n":"host"},{"n":"knownhostfilekind"}],"o":{"g":["string","error"],"n":"result"}}],[11,"iter","","Create an iterator over all of the known hosts in this structure.",18,{"i":[{"n":"self"}],"o":{"n":"hosts"}}],[11,"remove","","Delete a known host entry from the collection of known hosts.",18,{"i":[{"n":"self"},{"n":"host"}],"o":{"g":["error"],"n":"result"}}],[11,"check","","Checks a host and its associated key against the collection of known hosts, and returns info back about the (partially) matched entry.",18,null],[11,"check_port","","Same as `check`, but takes a port as well.",18,null],[11,"add","","Adds a known host to the collection of known hosts.",18,null],[11,"drop","","",18,{"i":[{"n":"self"}]}],[11,"next","","",19,{"i":[{"n":"self"}],"o":{"g":["result"],"n":"option"}}],[11,"name","","This is `None` if no plain text host name exists.",20,{"i":[{"n":"self"}],"o":{"g":["str"],"n":"option"}}],[11,"key","","Returns the key in base64/printable format",20,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"accept","","Accept a queued connection from this listener.",21,{"i":[{"n":"self"}],"o":{"g":["channel","error"],"n":"result"}}],[11,"drop","","",21,{"i":[{"n":"self"}]}],[11,"new","","Initializes an SSH session object.",22,{"o":{"g":["session"],"n":"option"}}],[11,"set_banner","","Set the SSH protocol banner for the local client",22,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"set_allow_sigpipe","","Flag indicating whether SIGPIPE signals will be allowed or blocked.",22,{"i":[{"n":"self"},{"n":"bool"}]}],[11,"set_compress","","Flag indicating whether this library will attempt to negotiate compression.",22,{"i":[{"n":"self"},{"n":"bool"}]}],[11,"set_blocking","","Set or clear blocking mode on session",22,{"i":[{"n":"self"},{"n":"bool"}]}],[11,"is_blocking","","Returns whether the session was previously set to nonblocking.",22,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"set_timeout","","Set timeout for blocking functions.",22,{"i":[{"n":"self"},{"n":"u32"}]}],[11,"timeout","","Returns the timeout, in milliseconds, for how long blocking calls may wait until they time out.",22,{"i":[{"n":"self"}],"o":{"n":"u32"}}],[11,"handshake","","Begin transport layer protocol negotiation with the connected host.",22,{"i":[{"n":"self"},{"n":"tcpstream"}],"o":{"g":["error"],"n":"result"}}],[11,"userauth_password","","Attempt basic password authentication.",22,{"i":[{"n":"self"},{"n":"str"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"userauth_agent","","Attempt to perform SSH agent authentication.",22,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"userauth_pubkey_file","","Attempt public key authentication using a PEM encoded private key file stored on disk.",22,{"i":[{"n":"self"},{"n":"str"},{"g":["path"],"n":"option"},{"n":"path"},{"g":["str"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"userauth_pubkey_memory","","Attempt public key authentication using a PEM encoded private key from memory. Public key is computed from private key if none passed. This is available only for `unix` targets, as it relies on openssl. It is therefore recommended to use `#[cfg(unix)]` or otherwise test for the `unix` compliation target when using this function.",22,{"i":[{"n":"self"},{"n":"str"},{"g":["str"],"n":"option"},{"n":"str"},{"g":["str"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"userauth_hostbased_file","","",22,{"i":[{"n":"self"},{"n":"str"},{"n":"path"},{"n":"path"},{"g":["str"],"n":"option"},{"n":"str"},{"g":["str"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"authenticated","","Indicates whether or not the named session has been successfully authenticated.",22,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"auth_methods","","Send a SSH_USERAUTH_NONE request to the remote host.",22,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["str","error"],"n":"result"}}],[11,"method_pref","","Set preferred key exchange method",22,{"i":[{"n":"self"},{"n":"methodtype"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[11,"methods","","Return the currently active algorithms.",22,{"i":[{"n":"self"},{"n":"methodtype"}],"o":{"g":["str"],"n":"option"}}],[11,"supported_algs","","Get list of supported algorithms.",22,{"i":[{"n":"self"},{"n":"methodtype"}],"o":{"g":["vec","error"],"n":"result"}}],[11,"agent","","Init an ssh-agent handle.",22,{"i":[{"n":"self"}],"o":{"g":["agent","error"],"n":"result"}}],[11,"known_hosts","","Init a collection of known hosts for this session.",22,{"i":[{"n":"self"}],"o":{"g":["knownhosts","error"],"n":"result"}}],[11,"channel_session","","Establish a new session-based channel.",22,{"i":[{"n":"self"}],"o":{"g":["channel","error"],"n":"result"}}],[11,"channel_direct_tcpip","","Tunnel a TCP connection through an SSH session.",22,{"i":[{"n":"self"},{"n":"str"},{"n":"u16"},{"n":"option"}],"o":{"g":["channel","error"],"n":"result"}}],[11,"channel_forward_listen","","Instruct the remote SSH server to begin listening for inbound TCP/IP connections.",22,{"i":[{"n":"self"},{"n":"u16"},{"g":["str"],"n":"option"},{"g":["u32"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"scp_recv","","Request a file from the remote host via SCP.",22,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["error"],"n":"result"}}],[11,"scp_send","","Send a file to the remote host via SCP.",22,{"i":[{"n":"self"},{"n":"path"},{"n":"i32"},{"n":"u64"},{"n":"option"}],"o":{"g":["channel","error"],"n":"result"}}],[11,"sftp","","Open a channel and initialize the SFTP subsystem.",22,{"i":[{"n":"self"}],"o":{"g":["sftp","error"],"n":"result"}}],[11,"channel_open","","Allocate a new channel for exchanging data with the server.",22,{"i":[{"n":"self"},{"n":"str"},{"n":"u32"},{"n":"u32"},{"g":["str"],"n":"option"}],"o":{"g":["channel","error"],"n":"result"}}],[11,"banner","","Get the remote banner",22,{"i":[{"n":"self"}],"o":{"g":["str"],"n":"option"}}],[11,"banner_bytes","","See `banner`.",22,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"host_key","","Get the remote key.",22,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"host_key_hash","","Returns the computed digest of the remote system's hostkey.",22,{"i":[{"n":"self"},{"n":"hashtype"}],"o":{"n":"option"}}],[11,"set_keepalive","","Set how often keepalive messages should be sent.",22,{"i":[{"n":"self"},{"n":"bool"},{"n":"u32"}]}],[11,"keepalive_send","","Send a keepalive message if needed.",22,{"i":[{"n":"self"}],"o":{"g":["u32","error"],"n":"result"}}],[11,"disconnect","","Terminate the transport layer.",22,{"i":[{"n":"self"},{"g":["disconnectcode"],"n":"option"},{"n":"str"},{"g":["str"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"rc","","Translate a return code into a Rust-`Result`.",22,{"i":[{"n":"self"},{"n":"c_int"}],"o":{"g":["error"],"n":"result"}}],[11,"drop","","",22,{"i":[{"n":"self"}]}],[11,"size","","Returns the size of the remote file.",23,{"i":[{"n":"self"}],"o":{"n":"u64"}}],[11,"mode","","Returns the listed mode of the remote file.",23,{"i":[{"n":"self"}],"o":{"n":"i32"}}],[11,"is_dir","","Returns whether the remote file is a directory.",23,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_file","","Returns whether the remote file is a regular file.",23,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"fmt","","",3,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",3,{"i":[{"n":"self"}],"o":{"n":"filestat"}}],[11,"eq","","",3,{"i":[{"n":"self"},{"n":"filestat"}],"o":{"n":"bool"}}],[11,"ne","","",3,{"i":[{"n":"self"},{"n":"filestat"}],"o":{"n":"bool"}}],[11,"eq","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"ne","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"clone","","",24,{"i":[{"n":"self"}],"o":{"n":"openflags"}}],[11,"partial_cmp","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"g":["ordering"],"n":"option"}}],[11,"lt","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"le","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"gt","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"ge","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"cmp","","",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"ordering"}}],[11,"hash","","",24,null],[11,"fmt","","",24,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"empty","","Returns an empty set of flags.",24,{"o":{"n":"openflags"}}],[11,"all","","Returns the set containing all flags.",24,{"o":{"n":"openflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",24,{"i":[{"n":"self"}],"o":{"n":"c_ulong"}}],[11,"from_bits","","Convert from underlying bit representation, unless that representation contains bits that do not correspond to a flag.",24,{"i":[{"n":"c_ulong"}],"o":{"g":["openflags"],"n":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits that do not correspond to flags.",24,{"i":[{"n":"c_ulong"}],"o":{"n":"openflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",24,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",24,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"remove","","Removes the specified flags in-place.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"toggle","","Toggles the specified flags in-place.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"bitor","","Returns the union of the two sets of flags.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"openflags"}}],[11,"bitor_assign","","Adds the set of flags.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"openflags"}}],[11,"bitxor_assign","","Toggles the set of flags.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"bitand","","Returns the intersection between the two sets of flags.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"openflags"}}],[11,"bitand_assign","","Disables all flags disabled in the set.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"sub","","Returns the set difference of the two sets of flags.",24,{"i":[{"n":"self"},{"n":"openflags"}],"o":{"n":"openflags"}}],[11,"sub_assign","","Disables all flags enabled in the set.",24,{"i":[{"n":"self"},{"n":"openflags"}]}],[11,"not","","Returns the complement of this set of flags.",24,{"i":[{"n":"self"}],"o":{"n":"openflags"}}],[11,"extend","","",24,{"i":[{"n":"self"},{"n":"t"}]}],[11,"from_iter","","",24,{"i":[{"n":"t"}],"o":{"n":"openflags"}}],[11,"eq","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"ne","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"clone","","",25,{"i":[{"n":"self"}],"o":{"n":"renameflags"}}],[11,"partial_cmp","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"g":["ordering"],"n":"option"}}],[11,"lt","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"le","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"gt","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"ge","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"cmp","","",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"ordering"}}],[11,"hash","","",25,null],[11,"fmt","","",25,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"empty","","Returns an empty set of flags.",25,{"o":{"n":"renameflags"}}],[11,"all","","Returns the set containing all flags.",25,{"o":{"n":"renameflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",25,{"i":[{"n":"self"}],"o":{"n":"c_long"}}],[11,"from_bits","","Convert from underlying bit representation, unless that representation contains bits that do not correspond to a flag.",25,{"i":[{"n":"c_long"}],"o":{"g":["renameflags"],"n":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits that do not correspond to flags.",25,{"i":[{"n":"c_long"}],"o":{"n":"renameflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",25,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",25,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"remove","","Removes the specified flags in-place.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"toggle","","Toggles the specified flags in-place.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"bitor","","Returns the union of the two sets of flags.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"renameflags"}}],[11,"bitor_assign","","Adds the set of flags.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"renameflags"}}],[11,"bitxor_assign","","Toggles the set of flags.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"bitand","","Returns the intersection between the two sets of flags.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"renameflags"}}],[11,"bitand_assign","","Disables all flags disabled in the set.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"sub","","Returns the set difference of the two sets of flags.",25,{"i":[{"n":"self"},{"n":"renameflags"}],"o":{"n":"renameflags"}}],[11,"sub_assign","","Disables all flags enabled in the set.",25,{"i":[{"n":"self"},{"n":"renameflags"}]}],[11,"not","","Returns the complement of this set of flags.",25,{"i":[{"n":"self"}],"o":{"n":"renameflags"}}],[11,"extend","","",25,{"i":[{"n":"self"},{"n":"t"}]}],[11,"from_iter","","",25,{"i":[{"n":"t"}],"o":{"n":"renameflags"}}],[11,"clone","","",4,{"i":[{"n":"self"}],"o":{"n":"opentype"}}],[11,"open_mode","","Open a handle to a file.",26,{"i":[{"n":"self"},{"n":"path"},{"n":"openflags"},{"n":"i32"},{"n":"opentype"}],"o":{"g":["file","error"],"n":"result"}}],[11,"open","","Helper to open a file in the `Read` mode.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["file","error"],"n":"result"}}],[11,"create","","Helper to create a file in write-only mode with truncation.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["file","error"],"n":"result"}}],[11,"opendir","","Helper to open a directory for reading its contents.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["file","error"],"n":"result"}}],[11,"readdir","","Convenience function to read the files in a directory.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["vec","error"],"n":"result"}}],[11,"mkdir","","Create a directory on the remote file system.",26,{"i":[{"n":"self"},{"n":"path"},{"n":"i32"}],"o":{"g":["error"],"n":"result"}}],[11,"rmdir","","Remove a directory from the remote file system.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["error"],"n":"result"}}],[11,"stat","","Get the metadata for a file, performed by stat(2)",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["filestat","error"],"n":"result"}}],[11,"lstat","","Get the metadata for a file, performed by lstat(2)",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["filestat","error"],"n":"result"}}],[11,"setstat","","Set the metadata for a file.",26,{"i":[{"n":"self"},{"n":"path"},{"n":"filestat"}],"o":{"g":["error"],"n":"result"}}],[11,"symlink","","Create a symlink at `target` pointing at `path`.",26,{"i":[{"n":"self"},{"n":"path"},{"n":"path"}],"o":{"g":["error"],"n":"result"}}],[11,"readlink","","Read a symlink at `path`.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["pathbuf","error"],"n":"result"}}],[11,"realpath","","Resolve the real path for `path`.",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["pathbuf","error"],"n":"result"}}],[11,"rename","","Rename a filesystem object on the remote filesystem.",26,{"i":[{"n":"self"},{"n":"path"},{"n":"path"},{"g":["renameflags"],"n":"option"}],"o":{"g":["error"],"n":"result"}}],[11,"unlink","","Remove a file on the remote filesystem",26,{"i":[{"n":"self"},{"n":"path"}],"o":{"g":["error"],"n":"result"}}],[11,"last_error","","Peel off the last error to happen on this SFTP instance.",26,{"i":[{"n":"self"}],"o":{"n":"error"}}],[11,"rc","","Translates a return code into a Rust-`Result`",26,{"i":[{"n":"self"},{"n":"c_int"}],"o":{"g":["error"],"n":"result"}}],[11,"drop","","",26,{"i":[{"n":"self"}]}],[11,"setstat","","Set the metadata for this handle.",27,{"i":[{"n":"self"},{"n":"filestat"}],"o":{"g":["error"],"n":"result"}}],[11,"stat","","Get the metadata for this handle.",27,{"i":[{"n":"self"}],"o":{"g":["filestat","error"],"n":"result"}}],[11,"statvfs","","",27,{"i":[{"n":"self"}],"o":{"g":["libssh2_sftp_statvfs","error"],"n":"result"}}],[11,"readdir","","Reads a block of data from a handle and returns file entry information for the next entry, if any.",27,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"fsync","","This function causes the remote server to synchronize the file data and metadata to disk (like fsync(2)).",27,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[11,"read","","",27,null],[11,"write","","",27,null],[11,"flush","","",27,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"seek","","Move the file handle's internal pointer to an arbitrary location.",27,{"i":[{"n":"self"},{"n":"seekfrom"}],"o":{"g":["u64"],"n":"result"}}],[11,"drop","","",27,{"i":[{"n":"self"}]}],[11,"file_type","","Returns the file type for this filestat.",3,{"i":[{"n":"self"}],"o":{"n":"filetype"}}],[11,"is_dir","","Returns whether this metadata is for a directory.",3,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_file","","Returns whether this metadata is for a regular file.",3,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"from_raw","","Creates a new instance of a stat from a raw instance.",3,{"i":[{"n":"libssh2_sftp_attributes"}],"o":{"n":"filestat"}}],[11,"raw","","Convert this stat structure to its raw representation.",3,{"i":[{"n":"self"}],"o":{"n":"libssh2_sftp_attributes"}}],[11,"is_dir","","Test whether this file type represents a directory.",28,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_file","","Test whether this file type represents a regular file.",28,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"is_symlink","","Test whether this file type represents a symbolic link.",28,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[7,"FLUSH_EXTENDED_DATA","","When passed to `Channel::flush_stream`, flushes all extended data substreams.",null,null],[7,"FLUSH_ALL","","When passed to `Channel::flush_stream`, flushes all substream.",null,null],[7,"EXTENDED_DATA_STDERR","","Stream ID of the stderr channel for stream-related methods on `Channel`",null,null],[17,"READ","","Open the file for reading.",null,null],[17,"WRITE","","Open the file for writing. If both this and Read are specified, the file is opened for both reading and writing",null,null],[17,"APPEND","","Force all writes to append data at the end of the file.",null,null],[17,"CREATE","","If this flag is specified, then a new file will be created if one does not already exist (if Truncate is specified, the new file will be truncated to zero length if it previously exists) ",null,null],[17,"TRUNCATE","","Forces an existing file with the same name to be truncated to zero length when creating a file by specifying `Create`. Using this flag implies the `Create` flag.",null,null],[17,"EXCLUSIVE","","Causes the request to fail if the named file already exists. Using this flag implies the `Create` flag.",null,null],[17,"ATOMIC","","Inform the remote that an atomic rename operation is desired if available",null,null],[17,"OVERWRITE","","In a rename operation, overwrite the destination if it already exists. If this flag is not present then it is an error if the destination already exists",null,null],[17,"NATIVE","","Inform the remote end that the native system calls for renaming should be used",null,null],[11,"clone","","",5,{"i":[{"n":"self"}],"o":{"n":"disconnectcode"}}],[11,"clone","","",6,{"i":[{"n":"self"}],"o":{"n":"hostkeytype"}}],[11,"clone","","",7,{"i":[{"n":"self"}],"o":{"n":"methodtype"}}],[11,"clone","","",8,{"i":[{"n":"self"}],"o":{"n":"hashtype"}}],[11,"clone","","",9,{"i":[{"n":"self"}],"o":{"n":"knownhostfilekind"}}],[11,"clone","","",10,{"i":[{"n":"self"}],"o":{"n":"checkresult"}}],[11,"clone","","",11,{"i":[{"n":"self"}],"o":{"n":"knownhostkeyformat"}}]],"paths":[[3,"ExitSignal"],[3,"ReadWindow"],[3,"WriteWindow"],[3,"FileStat"],[4,"OpenType"],[4,"DisconnectCode"],[4,"HostKeyType"],[4,"MethodType"],[4,"HashType"],[4,"KnownHostFileKind"],[4,"CheckResult"],[4,"KnownHostKeyFormat"],[3,"Agent"],[3,"Identities"],[3,"PublicKey"],[3,"Channel"],[3,"Stream"],[3,"Error"],[3,"KnownHosts"],[3,"Hosts"],[3,"Host"],[3,"Listener"],[3,"Session"],[3,"ScpFileStat"],[3,"OpenFlags"],[3,"RenameFlags"],[3,"Sftp"],[3,"File"],[3,"FileType"]]};
initSearch(searchIndex);
