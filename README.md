# brentonkludt.github.io

# Events by Param
> A web-based application designed for small to medium-scale event planning.



<p align="center">
  <img src="https://github.com/brentonkludt/brentonkludt.github.io/blob/main/Picture1.png" alt="Events by Param"/>
</p>



Events by Param was created by a team of eight crackpot computer science majors at Sacramento State. Their due-diligence, creativity, teamwork and raw effort gave rise to a website created for an event planning buisness, headed by Param Lastname. The website was based on the node.js framework, using the 

Arkime is built to be deployed across many systems and can scale to handle tens of gigabits/sec of traffic. PCAP retention is based on available sensor disk space. Metadata retention is based on the Elasticsearch cluster scale. Both can be increased at anytime and are under your complete control.

[Learn more on our website](https://arkime.com)

## Table of Contents

- [Background](#background)
- [Usage](#Usage)
- [Helpline](#Help Line)
- [Contribute](#Contribute)
- [Maintainers](#Maintainers)
- 
## Background

Arkime was created to replace commercial full packet systems at AOL in 2012. By having complete control of hardware and costs, we found we could deploy full packet capture across all our networks for the same cost as just one network using a commercial tool.

The Arkime system is comprised of 3 components:
* **capture** - A threaded C application that monitors network traffic, writes PCAP formatted files to disk, parses the captured packets, and sends metadata (SPI data) to elasticsearch.
* **viewer** - A [node.js](http://nodejs.org/) application that runs per capture machine. It handles the web interface and transfer of PCAP files.
* **[elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)** - The search database technology powering Arkime.

Once installed, a user can look at the data Arkime has captured using a simple web interface. Arkime provides multiple views of the data.  The primary view is the Sessions page that contains a list of sessions. Each session can be opened to view the metadata and PCAP data.

<img src="https://github.com/arkime/arkimeweb/blob/main/assets/sessions.png" width="1000">


Another way to view the data is the SPI View page, which allows the user to see all the unique values for each field that Arkime understands.

<img src="https://github.com/arkime/arkimeweb/blob/main/assets/spiview.png" width="1000">

## Usage

Most users should use the prebuilt binaries available at our [Downloads page](https://arkime.com/downloads) and follow the simple install instructions on that page.

For advanced users, you can build Arkime yourself:
* `git clone https://github.com/arkime/arkime`
* `./easybutton-build.sh --install` downloads all the prerequisites, build, and install
* `make config` - performs an initial Arkime configuration


## Help Line

Most of the system configuration will take place in the `/data/arkime/etc/config.ini` file.  The variables are documented in our [Settings Wiki page](https://arkime.com/settings).


## Contribute

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for information about how to get involved. We welcome issues, feature requests, pull requests, and documentation updates in GitHub.  For questions about using and troubleshooting Arkime please use the Slack channels.

## Maintainers

The best way to reach us is on Slack.  Please request an invitation to join the Arkime Slack workspace [here](https://slackinvite.arkime.com).

