
Player
#############

.. js:class:: Player()

   **メソッド**

   .. js:function:: getName()

      プレイヤー名を取得します。

      :returns: String

   .. js:function:: getUUID()

      プレイヤーのUUIDを取得します。

      :returns: String

   .. js:function:: getLocale()

      クライアントの言語を取得します。

      :returns: String

   .. js:function:: getLocation()

      プレイヤーの座標を取得します。

      :returns: Array[ Number ] (X, Y, Z)

   .. js:function:: getTeam()

      プレイヤーのチームを取得します。観戦者の場合はnullです。

      :returns: :doc:`Team </script/team>`

   .. js:function:: getKills()

      キル数を取得します。

      :returns: Number

   .. js:function:: getDeaths()

      デス数を取得します。

      :returns: Number

   .. js:function:: getKillStreaks()

      連続キル数を取得します。

      :returns: Number

   .. js:function:: getScore()

      スコアを取得します。

      :returns: Number

   .. js:function:: sendMessage(message)

      メッセージを送信します。

      :param String message: メッセージ
      :returns: void

   .. js:function:: sendLocaleMessage(name)

      `<locale>` で定義した多言語メッセージを送信します。

      :param String name: `<string>` ノードの `name` 属性
      :returns: void

   .. js:function:: teleport(x, y, z)

      プレイヤーを指定座標にテレポートさせます。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :returns: void

   .. js:function:: teleport(x, y, z)

      プレイヤーを指定座標にテレポートさせます。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標
      :param Number yaw: ヨー
      :param Number pitch: ピッチ
      :returns: void

   .. js:function:: velocity(x, y, z)

      プレイヤーのvelocityを設定します。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標

   .. js:function:: playSound(soundName, volume, pitch)

      効果音を再生します。

      :param String soundName: サウンド名
      :param Number volume: ボリューム
      :param Number pitch: ピッチ
      :returns: void

   .. js:function:: applyKit(kitName)

      キットを適用します。

      :param String kitName: キット名
      :returns: void

   .. js:function:: damage(value)

      プレイヤーにダメージを与えます。

      :param Number value: ダメージ値
      :returns: void

   .. js:function:: kill()

      プレイヤーを死亡させます。

      :returns: void

   .. js:function:: kill(killer)

      プレイヤーを死亡させます。

      :param Player killer: 倒したプレイヤー
      :returns: void

   .. js:function:: addItem(item)

      プレイヤーのインベントリにアイテムを追加します。

      :param ItemStack item: 追加するアイテム
      :returns: void

   .. js:function:: setItem(slot, item)

      プレイヤーのインベントリにアイテムを追加します。

      :param Number slot: インベントリスロット
      :param ItemStack item: 追加するアイテム
      :returns: void

   .. js:function:: removeItem(item)

      プレイヤーのインベントリからアイテムを削除します。

      :param ItemStack item: 削除するアイテム
      :returns: void

   .. js:function:: removeItem(item, amount)

      プレイヤーのインベントリから指定個数のアイテムを削除します。

      :param ItemStack item: 削除するアイテム
      :param Number amount: 削除する個数
      :returns: void

   .. js:function:: countItem(item)

      プレイヤーのインベントリにある特定アイテムの数を取得します。

      :param ItemStack item: 対象アイテム
      :returns: Number

   .. js:function:: getItem(slot)

      プレイヤーのインベントリにあるアイテムを取得します。

      :param Number slot: インベントリスロット
      :returns: :doc:`ItemStack </script/itemstack>`

   .. js:function:: getItemInHand()

      プレイヤーが手に持っているアイテムを取得します。

      :returns: :doc:`ItemStack </script/itemstack>`

   .. js:function:: isDead()

      プレイヤーが死亡しているかどうかを取得します。

      :returns: Boolean

