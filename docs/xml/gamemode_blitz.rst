Blitz
=======

Blitzゲームモードでは各プレイヤーが限られたリスポーン可能回数を持ち、リスポーン可能回数を超えると観戦者チームに移動されます。

このゲームモードでは最後まで生存者がいるチームが勝者となります。

.. code-block:: xml

	<blitz>
		<!-- ゲームの制限時間 -->
		<time>600</time>

		<!-- リスポーン可能回数 -->
		<lives>1</lives>

		<!-- 生存者が減った時にアナウンス -->
		<broadcastLives>true</broadcastLives>

		<!-- ゲームタイトル -->
		<title>Blitz</title>
	</blitz>