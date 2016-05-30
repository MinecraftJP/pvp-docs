Map
###

.. js:class:: Map()

   **メソッド**


   .. js:function:: getName()

      マップ名を取得します。

      :returns: String


   .. js:function:: getVersion()

      バージョンを取得します。

      :returns: String

   .. js:function:: getTeam(id)

      指定IDのチームを取得します。

      :param String id: チームID

          :returns: :doc:`Team </script/team>`

      *例*

      .. code-block:: javascript

         var redTeam = match.getMap().getTeam('red-team');
         match.end(redTeam);

   .. js:function:: getTeams()

      チームを取得します。

      :returns: Array[ :doc:`Team </script/team>` ]

      *例*

      .. code-block:: javascript

         var teams = match.getMap().getTeams();
         for (var i = 0; i < teams.length; i++) {
             var team = teams[i];
             match.broadcast(team.getName() + ' ' + team.getPlayerCount() + '/' + team.getMax());
         }


   .. js:function:: getRegion(id)

      指定IDのリージョンを取得します。

      :param String id: リージョンID

      :returns: :doc:`Region </script/region>`

   .. js:function:: getRegions()

      リージョンを取得します。

      :returns: Array[ :doc:`Region </script/region>` ]

   .. js:function:: getSpawn(id)

      指定IDのスポーンを取得します。

      :param String id: スポーンID

          :returns: :doc:`Spawn </script/spawn>`

   .. js:function:: getSpawns()

      スポーンを取得します。

      :returns: Array[ :doc:`Spawn </script/spawn>` ]

   .. js:function:: getFilterFlag(id)

      :doc:`Ifフィルター </xml/filters>` のフラグを取得します。

      :param String id: ID

      :returns: Boolean

   .. js:function:: setFilterFlag(id, flag)

      :doc:`Ifフィルター </xml/filters>` のフラグを設定します。

      :param String id: ID
      :param Boolean flag: フラグ

      :returns: void

   .. js:function:: getString(locale, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param String locale: 言語 (e.g. ja_JP)
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

   .. js:function:: getString(player, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param Player player: :doc:`プレイヤー </script/player>`
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

