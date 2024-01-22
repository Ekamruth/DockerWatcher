export default loaderData = [
  {
    "AppArmorProfile": "docker-default",
    "Args": [
      "nginx",
      "-g",
      "daemon off;"
    ],
    "Config": {
      "AttachStderr": true,
      "AttachStdin": false,
      "AttachStdout": true,
      "Cmd": [
        "nginx",
        "-g",
        "daemon off;"
      ],
      "Domainname": "",
      "Entrypoint": [
        "/docker-entrypoint.sh"
      ],
      "Env": [
        "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        "NGINX_VERSION=1.25.0",
        "NJS_VERSION=0.7.12",
        "PKG_RELEASE=1~bullseye"
      ],
      "ExposedPorts": {
        "80/tcp": {}
      },
      "Hostname": "ac27e18b5bf4",
      "Image": "nginx",
      "Labels": {
        "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
      },
      "OnBuild": null,
      "OpenStdin": false,
      "StdinOnce": false,
      "StopSignal": "SIGQUIT",
      "Tty": false,
      "User": "",
      "Volumes": null,
      "WorkingDir": ""
    },
    "Created": "2023-06-06T19:04:20.883044193Z",
    "Driver": "overlay2",
    "ExecIDs": null,
    "GraphDriver": {
      "Data": {
        "LowerDir": "/var/lib/docker/overlay2/b086b09aca039081f365daa648e418b6859b0e717daaa1bf428bfd1bae3545da-init/diff:/var/lib/docker/overlay2/d6b02ff33dae26847ec4b3ed3ae9997d616a34c7555136dccf66d86cd7ec8f25/diff:/var/lib/docker/overlay2/a24cf92069ee97bc8e5625758e8469e56322a0019f974db466e87fc16b10f98a/diff:/var/lib/docker/overlay2/790fbd5555182151e86228caeeffd2cf241a255aad3df478e16717a758424f98/diff:/var/lib/docker/overlay2/045bf7ac211ac0663db1d9c94836818f3214b1650c1d74204f18adb61a08879d/diff:/var/lib/docker/overlay2/db4ff328c149f62bfb18d8e636b21bb4e0a27d97979b24fcfda1846626b58593/diff:/var/lib/docker/overlay2/6b597565bd15c1ef7a32610f09a919d2be3ddc284deae4736fe864e714f0d0a6/diff",
        "MergedDir": "/var/lib/docker/overlay2/b086b09aca039081f365daa648e418b6859b0e717daaa1bf428bfd1bae3545da/merged",
        "UpperDir": "/var/lib/docker/overlay2/b086b09aca039081f365daa648e418b6859b0e717daaa1bf428bfd1bae3545da/diff",
        "WorkDir": "/var/lib/docker/overlay2/b086b09aca039081f365daa648e418b6859b0e717daaa1bf428bfd1bae3545da/work"
      },
      "Name": "overlay2"
    },
    "HostConfig": {
      "AutoRemove": false,
      "Binds": null,
      "BlkioDeviceReadBps": null,
      "BlkioDeviceReadIOps": null,
      "BlkioDeviceWriteBps": null,
      "BlkioDeviceWriteIOps": null,
      "BlkioWeight": 0,
      "BlkioWeightDevice": [],
      "CapAdd": null,
      "CapDrop": null,
      "Cgroup": "",
      "CgroupParent": "",
      "CgroupnsMode": "private",
      "ConsoleSize": [
        0,
        0
      ],
      "ContainerIDFile": "",
      "CpuCount": 0,
      "CpuPercent": 0,
      "CpuPeriod": 0,
      "CpuQuota": 0,
      "CpuRealtimePeriod": 0,
      "CpuRealtimeRuntime": 0,
      "CpuShares": 0,
      "CpusetCpus": "",
      "CpusetMems": "",
      "DeviceCgroupRules": null,
      "DeviceRequests": null,
      "Devices": [],
      "Dns": [],
      "DnsOptions": [],
      "DnsSearch": [],
      "ExtraHosts": null,
      "GroupAdd": null,
      "IOMaximumBandwidth": 0,
      "IOMaximumIOps": 0,
      "IpcMode": "private",
      "Isolation": "",
      "Links": null,
      "LogConfig": {
        "Config": {},
        "Type": "json-file"
      },
      "MaskedPaths": [
        "/proc/asound",
        "/proc/acpi",
        "/proc/kcore",
        "/proc/keys",
        "/proc/latency_stats",
        "/proc/timer_list",
        "/proc/timer_stats",
        "/proc/sched_debug",
        "/proc/scsi",
        "/sys/firmware"
      ],
      "Memory": 0,
      "MemoryReservation": 0,
      "MemorySwap": 0,
      "MemorySwappiness": null,
      "NanoCpus": 0,
      "NetworkMode": "default",
      "OomKillDisable": null,
      "OomScoreAdj": 0,
      "PidMode": "",
      "PidsLimit": null,
      "PortBindings": {},
      "Privileged": false,
      "PublishAllPorts": false,
      "ReadonlyPaths": [
        "/proc/bus",
        "/proc/fs",
        "/proc/irq",
        "/proc/sys",
        "/proc/sysrq-trigger"
      ],
      "ReadonlyRootfs": false,
      "RestartPolicy": {
        "MaximumRetryCount": 0,
        "Name": "no"
      },
      "Runtime": "runc",
      "SecurityOpt": null,
      "ShmSize": 67108864,
      "UTSMode": "",
      "Ulimits": null,
      "UsernsMode": "",
      "VolumeDriver": "",
      "VolumesFrom": null
    },
    "HostnamePath": "/var/lib/docker/containers/ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85/hostname",
    "HostsPath": "/var/lib/docker/containers/ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85/hosts",
    "Id": "ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85",
    "Image": "sha256:f9c14fe76d502861ba0939bc3189e642c02e257f06f4c0214b1f8ca329326cda",
    "LogPath": "/var/lib/docker/containers/ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85/ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85-json.log",
    "MountLabel": "",
    "Mounts": [],
    "Name": "/friendly_lalande",
    "NetworkSettings": {
      "Bridge": "",
      "EndpointID": "a814b2fd6ac7a8a0896d82077b5517e967ec97c0907afd64f33a9b431cb3989d",
      "Gateway": "172.17.0.1",
      "GlobalIPv6Address": "",
      "GlobalIPv6PrefixLen": 0,
      "HairpinMode": false,
      "IPAddress": "172.17.0.4",
      "IPPrefixLen": 16,
      "IPv6Gateway": "",
      "LinkLocalIPv6Address": "",
      "LinkLocalIPv6PrefixLen": 0,
      "MacAddress": "02:42:ac:11:00:04",
      "Networks": {
        "bridge": {
          "Aliases": null,
          "DriverOpts": null,
          "EndpointID": "a814b2fd6ac7a8a0896d82077b5517e967ec97c0907afd64f33a9b431cb3989d",
          "Gateway": "172.17.0.1",
          "GlobalIPv6Address": "",
          "GlobalIPv6PrefixLen": 0,
          "IPAMConfig": null,
          "IPAddress": "172.17.0.4",
          "IPPrefixLen": 16,
          "IPv6Gateway": "",
          "Links": null,
          "MacAddress": "02:42:ac:11:00:04",
          "NetworkID": "6f9bbe359dabe7f6757cd47357ae36530e21f82b69bf38f699e3aa27cd31eed8"
        }
      },
      "Ports": {
        "80/tcp": null
      },
      "SandboxID": "8536366f5820d90bf34d994e40dbfb34f088af46c066d132f1472929fdedde9b",
      "SandboxKey": "/var/run/docker/netns/8536366f5820",
      "SecondaryIPAddresses": null,
      "SecondaryIPv6Addresses": null
    },
    "Path": "/docker-entrypoint.sh",
    "Platform": "linux",
    "ProcessLabel": "",
    "ResolvConfPath": "/var/lib/docker/containers/ac27e18b5bf4ab199a6666d5d479345d00b092e887e349969de62bb321f0ab85/resolv.conf",
    "RestartCount": 0,
    "State": {
      "Dead": false,
      "Error": "",
      "ExitCode": 0,
      "FinishedAt": "0001-01-01T00:00:00Z",
      "OOMKilled": false,
      "Paused": false,
      "Pid": 447583,
      "Restarting": false,
      "Running": true,
      "StartedAt": "2023-06-06T19:04:21.5620951Z",
      "Status": "running"
    }
  },
  {
    "AppArmorProfile": "docker-default",
    "Args": [
      "solr-foreground",
      "-c",
      "-z",
      "172.17.0.2:2181"
    ],
    "Config": {
      "AttachStderr": false,
      "AttachStdin": false,
      "AttachStdout": false,
      "Cmd": [
        "solr-foreground",
        "-c",
        "-z",
        "172.17.0.2:2181"
      ],
      "Domainname": "",
      "Entrypoint": [
        "docker-entrypoint.sh"
      ],
      "Env": [
        "ZK_HOST=172.17.0.2:2181",
        "PATH=/opt/solr/bin:/opt/docker-solr/scripts:/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        "JAVA_HOME=/opt/java/openjdk",
        "LANG=en_US.UTF-8",
        "LANGUAGE=en_US:en",
        "LC_ALL=en_US.UTF-8",
        "JAVA_VERSION=jdk-11.0.19+7",
        "SOLR_USER=solr",
        "SOLR_UID=8983",
        "SOLR_GROUP=solr",
        "SOLR_GID=8983",
        "SOLR_CLOSER_URL=http://www.apache.org/dyn/closer.lua?filename=lucene/solr/8.11.2/solr-8.11.2.tgz&action=download",
        "SOLR_DIST_URL=https://www.apache.org/dist/lucene/solr/8.11.2/solr-8.11.2.tgz",
        "SOLR_ARCHIVE_URL=https://archive.apache.org/dist/lucene/solr/8.11.2/solr-8.11.2.tgz",
        "SOLR_INCLUDE=/etc/default/solr.in.sh",
        "SOLR_HOME=/var/solr/data",
        "SOLR_PID_DIR=/var/solr",
        "SOLR_LOGS_DIR=/var/solr/logs",
        "LOG4J_PROPS=/var/solr/log4j2.xml"
      ],
      "ExposedPorts": {
        "8983/tcp": {}
      },
      "Hostname": "a3f6adbe24e2",
      "Image": "solr:8.11.2",
      "Labels": {
        "maintainer": "The Apache Lucene/Solr Project",
        "org.opencontainers.image.ref.name": "ubuntu",
        "org.opencontainers.image.version": "20.04",
        "repository": "https://github.com/docker-solr/docker-solr"
      },
      "OnBuild": null,
      "OpenStdin": false,
      "StdinOnce": false,
      "Tty": false,
      "User": "8983",
      "Volumes": {
        "/var/solr": {}
      },
      "WorkingDir": "/opt/solr"
    },
    "Created": "2023-06-06T08:29:02.246938952Z",
    "Driver": "overlay2",
    "ExecIDs": null,
    "GraphDriver": {
      "Data": {
        "LowerDir": "/var/lib/docker/overlay2/c488ddc52330bf2b4053f7b00ea17548725b448e9b6f562226a8491a7851e89b-init/diff:/var/lib/docker/overlay2/a5418be8601c1eee1d0f1e06733ced5f343e6bf87287a71bcd9b7b4cf0edc6a8/diff:/var/lib/docker/overlay2/20e0c559065bf20077d5f8dc2a585386d16310ef0ee4850f08b7d6d75ae7f62a/diff:/var/lib/docker/overlay2/730dbac67f677324e932ce7256194b2c717625d3df92ebff00a1b20ad9a96cbf/diff:/var/lib/docker/overlay2/27112345d7669c064b97efa38e3e8478b378f6cc47cbc1f091d598e628db62f1/diff:/var/lib/docker/overlay2/2c7d121a2ef9805cc822c8aa19cd7700669878b896cdaf5541d8feea3ed2c4c6/diff:/var/lib/docker/overlay2/ec425c738b848156078bb49a72d7390972609ce31b7ddce0593587cc37dad2ba/diff:/var/lib/docker/overlay2/5259c5fedfe98280f3ff8ae526825903d51e774573af1d2ae2b4d8cff351ac7b/diff:/var/lib/docker/overlay2/3a2d74548e3bd06b9ae6849a72a01bad59062a5ead770a92b04085b8c875131a/diff:/var/lib/docker/overlay2/da958193559a37524feb3237a4cd8b8be2fd5bf697508c4fb931be5aad4814c8/diff",
        "MergedDir": "/var/lib/docker/overlay2/c488ddc52330bf2b4053f7b00ea17548725b448e9b6f562226a8491a7851e89b/merged",
        "UpperDir": "/var/lib/docker/overlay2/c488ddc52330bf2b4053f7b00ea17548725b448e9b6f562226a8491a7851e89b/diff",
        "WorkDir": "/var/lib/docker/overlay2/c488ddc52330bf2b4053f7b00ea17548725b448e9b6f562226a8491a7851e89b/work"
      },
      "Name": "overlay2"
    },
    "HostConfig": {
      "AutoRemove": false,
      "Binds": null,
      "BlkioDeviceReadBps": null,
      "BlkioDeviceReadIOps": null,
      "BlkioDeviceWriteBps": null,
      "BlkioDeviceWriteIOps": null,
      "BlkioWeight": 0,
      "BlkioWeightDevice": [],
      "CapAdd": null,
      "CapDrop": null,
      "Cgroup": "",
      "CgroupParent": "",
      "CgroupnsMode": "private",
      "ConsoleSize": [
        0,
        0
      ],
      "ContainerIDFile": "",
      "CpuCount": 0,
      "CpuPercent": 0,
      "CpuPeriod": 0,
      "CpuQuota": 0,
      "CpuRealtimePeriod": 0,
      "CpuRealtimeRuntime": 0,
      "CpuShares": 0,
      "CpusetCpus": "",
      "CpusetMems": "",
      "DeviceCgroupRules": null,
      "DeviceRequests": null,
      "Devices": [],
      "Dns": [],
      "DnsOptions": [],
      "DnsSearch": [],
      "ExtraHosts": null,
      "GroupAdd": null,
      "IOMaximumBandwidth": 0,
      "IOMaximumIOps": 0,
      "IpcMode": "private",
      "Isolation": "",
      "Links": null,
      "LogConfig": {
        "Config": {},
        "Type": "json-file"
      },
      "MaskedPaths": [
        "/proc/asound",
        "/proc/acpi",
        "/proc/kcore",
        "/proc/keys",
        "/proc/latency_stats",
        "/proc/timer_list",
        "/proc/timer_stats",
        "/proc/sched_debug",
        "/proc/scsi",
        "/sys/firmware"
      ],
      "Memory": 0,
      "MemoryReservation": 0,
      "MemorySwap": 0,
      "MemorySwappiness": null,
      "NanoCpus": 0,
      "NetworkMode": "default",
      "OomKillDisable": null,
      "OomScoreAdj": 0,
      "PidMode": "",
      "PidsLimit": null,
      "PortBindings": {
        "8983/tcp": [
          {
            "HostIp": "",
            "HostPort": "8983"
          }
        ]
      },
      "Privileged": false,
      "PublishAllPorts": false,
      "ReadonlyPaths": [
        "/proc/bus",
        "/proc/fs",
        "/proc/irq",
        "/proc/sys",
        "/proc/sysrq-trigger"
      ],
      "ReadonlyRootfs": false,
      "RestartPolicy": {
        "MaximumRetryCount": 0,
        "Name": "no"
      },
      "Runtime": "runc",
      "SecurityOpt": null,
      "ShmSize": 67108864,
      "UTSMode": "",
      "Ulimits": null,
      "UsernsMode": "",
      "VolumeDriver": "",
      "VolumesFrom": null
    },
    "HostnamePath": "/var/lib/docker/containers/a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a/hostname",
    "HostsPath": "/var/lib/docker/containers/a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a/hosts",
    "Id": "a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a",
    "Image": "sha256:0406c2fa547fd0689f448a7456071186b31df8ff583cd687789c09dbf1704b51",
    "LogPath": "/var/lib/docker/containers/a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a/a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a-json.log",
    "MountLabel": "",
    "Mounts": [
      {
        "Destination": "/var/solr",
        "Driver": "local",
        "Mode": "",
        "Name": "b73da2ba89fbfd2a94e773ba93a2608cfdb8ee5ba6f24751474b343e14efef43",
        "Propagation": "",
        "RW": true,
        "Source": "/var/lib/docker/volumes/b73da2ba89fbfd2a94e773ba93a2608cfdb8ee5ba6f24751474b343e14efef43/_data",
        "Type": "volume"
      }
    ],
    "Name": "/solrcloud",
    "NetworkSettings": {
      "Bridge": "",
      "EndpointID": "592ddd854af0c84752fbac40a35f9dee379b27d960937087d606e5d485339424",
      "Gateway": "172.17.0.1",
      "GlobalIPv6Address": "",
      "GlobalIPv6PrefixLen": 0,
      "HairpinMode": false,
      "IPAddress": "172.17.0.3",
      "IPPrefixLen": 16,
      "IPv6Gateway": "",
      "LinkLocalIPv6Address": "",
      "LinkLocalIPv6PrefixLen": 0,
      "MacAddress": "02:42:ac:11:00:03",
      "Networks": {
        "bridge": {
          "Aliases": null,
          "DriverOpts": null,
          "EndpointID": "592ddd854af0c84752fbac40a35f9dee379b27d960937087d606e5d485339424",
          "Gateway": "172.17.0.1",
          "GlobalIPv6Address": "",
          "GlobalIPv6PrefixLen": 0,
          "IPAMConfig": null,
          "IPAddress": "172.17.0.3",
          "IPPrefixLen": 16,
          "IPv6Gateway": "",
          "Links": null,
          "MacAddress": "02:42:ac:11:00:03",
          "NetworkID": "6f9bbe359dabe7f6757cd47357ae36530e21f82b69bf38f699e3aa27cd31eed8"
        }
      },
      "Ports": {
        "8983/tcp": [
          {
            "HostIp": "0.0.0.0",
            "HostPort": "8983"
          },
          {
            "HostIp": "::",
            "HostPort": "8983"
          }
        ]
      },
      "SandboxID": "c3563905f83095cffd675e00a1771497bdbe7cdf2f53c5bddb2532dd002a107c",
      "SandboxKey": "/var/run/docker/netns/c3563905f830",
      "SecondaryIPAddresses": null,
      "SecondaryIPv6Addresses": null
    },
    "Path": "docker-entrypoint.sh",
    "Platform": "linux",
    "ProcessLabel": "",
    "ResolvConfPath": "/var/lib/docker/containers/a3f6adbe24e24109f81138be01e2a630bd3417d014ae09546461c43002999b7a/resolv.conf",
    "RestartCount": 0,
    "State": {
      "Dead": false,
      "Error": "",
      "ExitCode": 0,
      "FinishedAt": "2023-06-06T08:35:07.413716282Z",
      "OOMKilled": false,
      "Paused": false,
      "Pid": 312638,
      "Restarting": false,
      "Running": true,
      "StartedAt": "2023-06-06T08:35:08.216034859Z",
      "Status": "running"
    }
  },
  {
    "AppArmorProfile": "docker-default",
    "Args": [
      "zkServer.sh",
      "start-foreground"
    ],
    "Config": {
      "AttachStderr": false,
      "AttachStdin": false,
      "AttachStdout": false,
      "Cmd": [
        "zkServer.sh",
        "start-foreground"
      ],
      "Domainname": "",
      "Entrypoint": [
        "/docker-entrypoint.sh"
      ],
      "Env": [
        "PATH=/usr/local/openjdk-11/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/apache-zookeeper-3.6.3-bin/bin",
        "JAVA_HOME=/usr/local/openjdk-11",
        "LANG=C.UTF-8",
        "JAVA_VERSION=11.0.16",
        "ZOO_CONF_DIR=/conf",
        "ZOO_DATA_DIR=/data",
        "ZOO_DATA_LOG_DIR=/datalog",
        "ZOO_LOG_DIR=/logs",
        "ZOO_TICK_TIME=2000",
        "ZOO_INIT_LIMIT=5",
        "ZOO_SYNC_LIMIT=2",
        "ZOO_AUTOPURGE_PURGEINTERVAL=0",
        "ZOO_AUTOPURGE_SNAPRETAINCOUNT=3",
        "ZOO_MAX_CLIENT_CNXNS=60",
        "ZOO_STANDALONE_ENABLED=true",
        "ZOO_ADMINSERVER_ENABLED=true",
        "ZOOCFGDIR=/conf"
      ],
      "ExposedPorts": {
        "2181/tcp": {},
        "2888/tcp": {},
        "3888/tcp": {},
        "8080/tcp": {}
      },
      "Hostname": "d3085b4ceaa6",
      "Image": "zookeeper:3.6.3",
      "Labels": {},
      "OnBuild": null,
      "OpenStdin": false,
      "StdinOnce": false,
      "Tty": false,
      "User": "",
      "Volumes": {
        "/data": {},
        "/datalog": {},
        "/logs": {}
      },
      "WorkingDir": "/apache-zookeeper-3.6.3-bin"
    },
    "Created": "2023-06-06T08:10:23.495269619Z",
    "Driver": "overlay2",
    "ExecIDs": null,
    "GraphDriver": {
      "Data": {
        "LowerDir": "/var/lib/docker/overlay2/d98d1592bb5572b1f1266c194fca39b74fafaa2792b5523607594c421da3481e-init/diff:/var/lib/docker/overlay2/4843108c0ed5ff6ec26b6afbe4c29f7241a00b7c63307af6372929556495ab51/diff:/var/lib/docker/overlay2/c8f125417a0685afa8893f2be0e73e2e09cc40b331f325ec4d459402c2e4c031/diff:/var/lib/docker/overlay2/a69ee49f6fb6dcd0514eedf86229423b13e65ef1579b80e947892bf870cd1f0e/diff:/var/lib/docker/overlay2/1668cd2e2972b19069a804ed507048e3c2f14f0f3d2f7c638a9bef9d1f17f49f/diff:/var/lib/docker/overlay2/642eb188fea6ac850bb68507f78e9f8f65324915fef345eca1fbc37be17459e2/diff:/var/lib/docker/overlay2/4c75fb4d8727e9758769221d01a411df8ef5a036131e46d039c9b581590b1b5f/diff:/var/lib/docker/overlay2/de4e301919fe2a4b0ef9eb69031a8f306f0dcb10df89742b9fdbec85415776fe/diff:/var/lib/docker/overlay2/cf0cb0dd4c699c948d474df2fc907c4d274e68bb25bf031ed2b502fa98c99aca/diff",
        "MergedDir": "/var/lib/docker/overlay2/d98d1592bb5572b1f1266c194fca39b74fafaa2792b5523607594c421da3481e/merged",
        "UpperDir": "/var/lib/docker/overlay2/d98d1592bb5572b1f1266c194fca39b74fafaa2792b5523607594c421da3481e/diff",
        "WorkDir": "/var/lib/docker/overlay2/d98d1592bb5572b1f1266c194fca39b74fafaa2792b5523607594c421da3481e/work"
      },
      "Name": "overlay2"
    },
    "HostConfig": {
      "AutoRemove": false,
      "Binds": null,
      "BlkioDeviceReadBps": null,
      "BlkioDeviceReadIOps": null,
      "BlkioDeviceWriteBps": null,
      "BlkioDeviceWriteIOps": null,
      "BlkioWeight": 0,
      "BlkioWeightDevice": [],
      "CapAdd": null,
      "CapDrop": null,
      "Cgroup": "",
      "CgroupParent": "",
      "CgroupnsMode": "private",
      "ConsoleSize": [
        0,
        0
      ],
      "ContainerIDFile": "",
      "CpuCount": 0,
      "CpuPercent": 0,
      "CpuPeriod": 0,
      "CpuQuota": 0,
      "CpuRealtimePeriod": 0,
      "CpuRealtimeRuntime": 0,
      "CpuShares": 0,
      "CpusetCpus": "",
      "CpusetMems": "",
      "DeviceCgroupRules": null,
      "DeviceRequests": null,
      "Devices": [],
      "Dns": [],
      "DnsOptions": [],
      "DnsSearch": [],
      "ExtraHosts": null,
      "GroupAdd": null,
      "IOMaximumBandwidth": 0,
      "IOMaximumIOps": 0,
      "IpcMode": "private",
      "Isolation": "",
      "Links": null,
      "LogConfig": {
        "Config": {},
        "Type": "json-file"
      },
      "MaskedPaths": [
        "/proc/asound",
        "/proc/acpi",
        "/proc/kcore",
        "/proc/keys",
        "/proc/latency_stats",
        "/proc/timer_list",
        "/proc/timer_stats",
        "/proc/sched_debug",
        "/proc/scsi",
        "/sys/firmware"
      ],
      "Memory": 0,
      "MemoryReservation": 0,
      "MemorySwap": 0,
      "MemorySwappiness": null,
      "NanoCpus": 0,
      "NetworkMode": "default",
      "OomKillDisable": null,
      "OomScoreAdj": 0,
      "PidMode": "",
      "PidsLimit": null,
      "PortBindings": {
        "2181/tcp": [
          {
            "HostIp": "",
            "HostPort": "2181"
          }
        ]
      },
      "Privileged": false,
      "PublishAllPorts": false,
      "ReadonlyPaths": [
        "/proc/bus",
        "/proc/fs",
        "/proc/irq",
        "/proc/sys",
        "/proc/sysrq-trigger"
      ],
      "ReadonlyRootfs": false,
      "RestartPolicy": {
        "MaximumRetryCount": 0,
        "Name": "no"
      },
      "Runtime": "runc",
      "SecurityOpt": null,
      "ShmSize": 67108864,
      "UTSMode": "",
      "Ulimits": null,
      "UsernsMode": "",
      "VolumeDriver": "",
      "VolumesFrom": null
    },
    "HostnamePath": "/var/lib/docker/containers/d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a/hostname",
    "HostsPath": "/var/lib/docker/containers/d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a/hosts",
    "Id": "d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a",
    "Image": "sha256:15b7334b03fcc6b4b40ee28b26ce0f40816f01a078846867d1a6c3e69077eb49",
    "LogPath": "/var/lib/docker/containers/d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a/d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a-json.log",
    "MountLabel": "",
    "Mounts": [
      {
        "Destination": "/data",
        "Driver": "local",
        "Mode": "",
        "Name": "686c230e0fbdbd567b573e731a5949aae17e0b7d9ed62aed5015e5e1a51bdd18",
        "Propagation": "",
        "RW": true,
        "Source": "/var/lib/docker/volumes/686c230e0fbdbd567b573e731a5949aae17e0b7d9ed62aed5015e5e1a51bdd18/_data",
        "Type": "volume"
      },
      {
        "Destination": "/datalog",
        "Driver": "local",
        "Mode": "",
        "Name": "bb81b7cf057d0749e9443b114f376c7d6f39ed70eaa8ff5deae6c7fa58481813",
        "Propagation": "",
        "RW": true,
        "Source": "/var/lib/docker/volumes/bb81b7cf057d0749e9443b114f376c7d6f39ed70eaa8ff5deae6c7fa58481813/_data",
        "Type": "volume"
      },
      {
        "Destination": "/logs",
        "Driver": "local",
        "Mode": "",
        "Name": "20f4455e6e93a41ededb7fb5c045bc1361cf889de0dbe937ea6dd9e5bec29a2f",
        "Propagation": "",
        "RW": true,
        "Source": "/var/lib/docker/volumes/20f4455e6e93a41ededb7fb5c045bc1361cf889de0dbe937ea6dd9e5bec29a2f/_data",
        "Type": "volume"
      }
    ],
    "Name": "/zookeeper",
    "NetworkSettings": {
      "Bridge": "",
      "EndpointID": "ec04caf52e1765ffde2f0374bbad0aa2f0d91a28089299da9a4cce6f082e518c",
      "Gateway": "172.17.0.1",
      "GlobalIPv6Address": "",
      "GlobalIPv6PrefixLen": 0,
      "HairpinMode": false,
      "IPAddress": "172.17.0.2",
      "IPPrefixLen": 16,
      "IPv6Gateway": "",
      "LinkLocalIPv6Address": "",
      "LinkLocalIPv6PrefixLen": 0,
      "MacAddress": "02:42:ac:11:00:02",
      "Networks": {
        "bridge": {
          "Aliases": null,
          "DriverOpts": null,
          "EndpointID": "ec04caf52e1765ffde2f0374bbad0aa2f0d91a28089299da9a4cce6f082e518c",
          "Gateway": "172.17.0.1",
          "GlobalIPv6Address": "",
          "GlobalIPv6PrefixLen": 0,
          "IPAMConfig": null,
          "IPAddress": "172.17.0.2",
          "IPPrefixLen": 16,
          "IPv6Gateway": "",
          "Links": null,
          "MacAddress": "02:42:ac:11:00:02",
          "NetworkID": "6f9bbe359dabe7f6757cd47357ae36530e21f82b69bf38f699e3aa27cd31eed8"
        }
      },
      "Ports": {
        "2181/tcp": [
          {
            "HostIp": "0.0.0.0",
            "HostPort": "2181"
          },
          {
            "HostIp": "::",
            "HostPort": "2181"
          }
        ],
        "2888/tcp": null,
        "3888/tcp": null,
        "8080/tcp": null
      },
      "SandboxID": "7016b619b5a2fb7cc79deb755ffe2e3846ffefe520ab5e8066bbab9443f88fe0",
      "SandboxKey": "/var/run/docker/netns/7016b619b5a2",
      "SecondaryIPAddresses": null,
      "SecondaryIPv6Addresses": null
    },
    "Path": "/docker-entrypoint.sh",
    "Platform": "linux",
    "ProcessLabel": "",
    "ResolvConfPath": "/var/lib/docker/containers/d3085b4ceaa6aa6310a7d46976ceec98a658c18851ddfeef0b1153fe798da74a/resolv.conf",
    "RestartCount": 0,
    "State": {
      "Dead": false,
      "Error": "",
      "ExitCode": 0,
      "FinishedAt": "2023-06-06T08:35:02.241421077Z",
      "OOMKilled": false,
      "Paused": false,
      "Pid": 312301,
      "Restarting": false,
      "Running": true,
      "StartedAt": "2023-06-06T08:35:02.989439241Z",
      "Status": "running"
    }
  }
];