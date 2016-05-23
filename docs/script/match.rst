
Match
#############

Matchオブジェクトはデフォルト状態でグローバルスコープに `match` として定義されています。

Matchオブジェクトは :doc:`EventEmitter </script/eventemitter>` オブジェクトを継承しています。

.. js:class:: Match()

   **メソッド**

   .. js:function:: getMap()

      :doc:`Map </script/map>` オブジェクトを取得します。

      :returns: :doc:`Map </script/map>`

   .. js:function:: getWorld()

      :doc:`World </script/world>` オブジェクトを取得します。

      :returns: :doc:`World </script/world>`

   .. js:function:: getSidebar()

      :doc:`Sidebar </script/sidebar>` オブジェクトを取得します。

      :returns: :doc:`Sidebar </script/sidebar>`

   .. js:function:: getServer()

      サーバ名を取得します。

      :returns: String

      *例*

      .. code-block:: javascript

         match.broadcast('このサーバは' + match.getServer() + 'です。');

   .. js:function:: getElapsed()

      経過時間をミリ秒で取得します。

      :returns: Number

   .. js:function:: broadcast(message)

      サーバ内のプレイヤーにメッセージを送信します。

      :param String message: メッセージ
      :returns: void

      *例*

      .. code-block:: javascript

         match.broadcast('&6全員に表示されるメッセージです。');

   .. js:function:: getObjectives()

      オブジェクティブを取得します。

      :returns: Array[ :doc:`Objective </script/objective>` ]

   .. js:function:: getPlayers()

      プレイヤーを取得します。

      :returns: Array[ :doc:`Player </script/player>` ]

      *例*

      .. code-block:: javascript

         match.broadcast('デスマッチタイム！');
         var players = match.getPlayers();
         for (var i = 0; i < players.length; i++) {
             players[i].teleport(0, 60, 0);
         }

   .. js:function:: end(team)

      特定のチームを勝者としてゲームを終了させます。チーム戦時のみ使用可能です。

      :param Team team: :doc:`Team </script/team>`

      :returns: void

   .. js:function:: end(player)

      特定のプレイヤーを勝者としてゲームを終了させます。個人戦時のみ使用可能です。

      :param Player player: :doc:`Player </script/player>`

      :returns: void

   .. js:function:: end()

      引き分けでゲームを終了させます。

      :returns: void

   **イベント**

   .. js:data:: load

      マップのロード時

      *例*

      .. code-block:: javascript

         match.on('load', function() {
             match.broadcast('Match loaded.');
         });

   .. js:data:: start

      ゲーム開始時

      *例*

      .. code-block:: javascript

         match.on('start', function() {
             match.broadcast('ゲーム開始！');
         });

   .. js:data:: end

      ゲーム終了時

      *例*

      .. code-block:: javascript

         match.on('end', function() {
             match.broadcast('ゲーム終了！お疲れ様でした。');
         });

   .. js:data:: death

      プレイヤーの死亡時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getVictim(), :doc:`Player </script/player>`, 倒されたプレイヤー
         getKiller(), :doc:`Player </script/player>` or null, 倒したプレイヤー
         getCause(), String, :doc:`DamageCause </data/damagecause>` (死因)
         getWeapon(), String or null, 武器 (プレイヤーに倒された場合のみ)
         getDistance(), Number, 距離 (弓で倒された場合のみ)

      *例*

      .. code-block:: javascript

         match.on('death', function(event) {
             var victim = event.getVictim();
             var killer = event.getKiller();
             var cause = event.getCause();
             var weapon = event.getWeapon();
             var distance = event.getDistance();

             if (killer) {
                 console.log(victim.getName() + "が" + killer.getName() + "に倒された！");
             } else {
                 console.log(victim.getName() + "が死んでしまった！");
             }
         });

   .. js:data:: respawn

      プレイヤーのリスポーン時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, リスポーンしたプレイヤー

      *例*

      .. code-block:: javascript

         match.on('respawn', function(event) {
             event.getPlayer().sendMessage('Respawned.');
         });

   .. js:data:: leaveTeam

      プレイヤーがチームから抜けた時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, チームから抜けたプレイヤー

      *例*

      .. code-block:: javascript

         match.on('leaveTeam', function(event) {
            console.log(event.getPlayer().getName() + 'が' + event.getPlayer().getTeam().getName() + 'から抜けました。');
         });

   .. js:data:: objective

      オブジェクティブ更新時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getObjective(), :doc:`Objective </script/objective>`, 更新されたオブジェクティブ
