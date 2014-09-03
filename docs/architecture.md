
## Overview

Grandee is designed as a small core, surrounded by many swappable plugins.

The key elements are:
 * A **network map**. This is based [grano](http://granoproject.org/docs/), which is also used as a storage backend. The network consists of **entities** and **relations** between them. Each entity or relation has a number of **properties** associated with it.
 * A **visualization layer**. This displays the network, and allows the user to select and transform it. 
 * Multiple **transformation plugins**. These are used to expand or modify the network map. User action in the visualization layer triggers a transformation, which replies with a series of new or modified entities and relations to be merged into the network map. These transformations will often consist of passing information on certain nodes to a database or other **data source**. 

