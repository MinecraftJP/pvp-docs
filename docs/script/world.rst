
World
#############

Worldオブジェクトは主にブロック操作、Entity関連、ワールド設定などを行う事が出来ます。

Worldオブジェクトは :doc:`EventEmitter </script/eventemitter>` オブジェクトを継承しています。

.. js:class:: World()

   **メソッド**

   .. js:function:: getDimension()

      ワールドの環境を取得します。

      :returns: String (NORMAL or NETHER or THE_END)

   .. js:function:: getDifficulty()

      難易度を取得します。

     :returns: String (PEACEFUL or EASY or NORMAL or HARD)

   .. js:function:: setDifficulty(difficulty)

      難易度を設定します。

      :param String difficulty: 難易度 (PEACEFUL or EASY or NORMAL or HARD)
      :returns: void

   .. js:function:: getPVP()

      PvPフラグを取得します。

      :returns: Boolean

   .. js:function:: setPVP(flag)

      PvPフラグを設定します。

      :param Boolean pvp: trueで攻撃可
      :returns: void

   .. js:function:: getWeather()

      天候を取得します。

      :returns: String (THUNDER or STROM or SUNNY)

      *例*

      .. code-block:: javascript

         if (match.getWorld().getWeather() == 'SUNNY') {
             console.log('現在の天候は晴れです。');
         }

   .. js:function:: setWeather(weather)

      天候を設定します。

      :param String weather: 天候 (THUNDER or STORM or SUNNY)
      :returns: void

      *例*

      .. code-block:: javascript

         // 天候を晴れにする
         match.getWorld().setWeather('SUNNY');

         // 雷雨にする
         match.getWorld().setWeather('THUNDER');

   .. js:function:: getTime()

      時間を取得します。

      :returns: Number

      *例*

      .. code-block:: javascript

         console.log('現在ゲーム内時間の' + Math.round(match.getWorld().getTime() / 1000) + '時です。');

   .. js:function:: setTime(time)

      時間を設定します。

      :param Number time: 時 x 1000で表すゲーム時間
      :returns: void

      *例*

      .. code-block:: javascript

         // 午後2時にする
         match.getWorld().setTime(14000);

         // 午前3時にする
         match.getWorld().setTime(3000);

   .. js:function:: getBlock(x, y, z)

      指定座標のブロックを取得します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :returns: :doc:`Block </script/block>`

      *例*

      .. code-block:: javascript

         var block = match.getWorld().getBlock(30, 64, 0);
         console.log('座標30, 64, 0のブロックは羊毛' + (block.getType() == 'WOOL' ? 'です。' : 'ではありません。'));

         // 10, 64, 10のブロックを赤の色つきガラスに変える
         var block = match.getWorld().getBlock(10, 64, 10)
         block.setType('STAINED_GLASS');
         block.setData(14);

         // 20x20の床を作る
         var world = match.getWorld();
         for (var x = 100; x < 120; x++) {
             for (var z = 100; z < 120; z++) {
                 world.getBlock(x, 64, z).setType('WOOD');
             }
         }

   .. js:function:: playSound(x, y, z, soundName, volume, pitch)

      指定座標でサウンドを再生します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param String soundName: サウンド名
      :param Number volume: ボリューム
      :param Number pitch: ピッチ
      :returns: void

   .. js:function:: playEffect(x, y, z, effectName, data, radius)

      指定座標でエフェクトを再生します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param String effectName: エフェクト名
      :param Number data: データ
      :param Numbmer radius: 範囲
      :returns: void

   .. js:function:: playParticle(x, y, z, particleName, offset, speed, count)

      指定座標でパーティクルを表示します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param String particleName: パーティクル名
      :param Number offset:
      :param Number speed:
      :param Number count:
      :returns: void

      *例*

      .. code-block:: javascript

         // 100x100の範囲内に20個のパーティクルを生成
         setInterval(function() {
             for (var i = 0; i < 20; i++) {
                 var x = getRandom(-50, 50);
                 var y = 5;
                 var z = getRandom(-50, 50);
                 match.getWorld().playParticle(x, y, z, 'HEART', 1.0, 1.0, 3);
             }
         }, 1000);

         function getRandom(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }

   .. js:function:: createExplosion(x, y, z, power)

      指定座標に爆発を生成します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param Number power: 威力
      :returns: void

   .. js:function:: strikeLightning(x, y, z, damageFlag)

      指定座標に雷を落とします。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param Boolean damageFlag: プレイヤーへのダメージ有無
      :returns: void

   .. js:function:: spawnEntity(x, y, z, entityType)

      指定座標にEntityをスポーンさせます。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param String entityType: :doc:`EntityType </data/entity_type>`
      :returns: void

      *例*

      .. code-block:: javascript

         // 空からTNTを落とす
         match.getWorld().spawnEntity(0, 128, 0, 'PRIMED_TNT');

         // Ocelotを50,64,50に召喚
         match.getWorld().spawnEntity(50, 64, 50, 'OCELOT');

   .. js:function:: spawnFallingBlock(x, y, z, type, data)

      指定座標のブロックに落下ブロックを生成します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param String type: :doc:`Material </data/material>`
      :param Number data: データ
      :returns: void

   .. js:function:: sendMessage(message)

      ワールド内のプレイヤーにメッセージを送信します。

      :param String message: メッセージ
      :returns: void

   .. js:function:: sendLocaleMessage(name)

      ワールド内のプレイヤーに `<locale>` で定義した多言語メッセージを送信します。

      :param String name: `<string>` ノードの `name` 属性
      :returns: void

   **イベント**

   イベントの設定方法は :doc:`EventEmitter </script/eventemitter>` をご覧ください。

   .. js:data:: button

      プレイヤーによるWood Button, Stone Button, Leverの操作時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, 操作したプレイヤー
         getBlock(), :doc:`Block </script/block>`, 	操作したブロック
         getState(), Number, レバーの状態(1=ON, 0=OFF)、ボタンの場合は常に1

      *例*

      .. code-block:: javascript

         match.getWorld().on('button', function(event) {
             console.log(event.getPlayer().getName() + 'が' + event.getType() + 'を操作しました。');
         });

   .. js:data:: use

      プレイヤーがアイテムを持った状態で右クリックした時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, プレイヤー
         getItemStack(), :doc:`ItemStack </script/itemstack>`, プレイヤーが手に持っているアイテム

      *例*

      .. code-block:: javascript

         match.getWorld().on('use', function(event) {
             if (event.getItemStack().getType() == 'FEATHER') {
                 event.getPlayer().setVelocity(0, 2, 0);
             }
         });
