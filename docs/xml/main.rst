マップ構造
==========

全てのXML定義ファイルは一つの ``<map>`` ノードが存在していなければなりません。 また、ファイルの文字コードはUTF-8を使用してください。

.. code-block:: xml

    <?xml version="1.0" encoding="utf-8"?>
    <map proto="1.3.0">
        <!-- マップ名 -->
        <name>マップ名</name>
        <!-- マップバージョン -->
        <version>1.0.0</version>
        <!-- マップの説明 -->
        <objective>コントロールポイントの制圧 / Capture the Control Point</objective>
    <!-- マップ作者 複数指定可能です。contribution=""属性でどのようにマップに貢献したかを設定する事が出来ます。
    有効なMinecraft IDである必要があります。  -->
    <authors>
        <author>Example1</author>
        <author contribution="XML Coding">Example2</author>
    </authors>

    <!-- マップ制作協力者 複数指定可能です。contribution=""属性でどのようにマップに貢献したかを設定する事が出来ます。
    有効なMinecraft IDである必要があります。  -->
    <contributors>
        <contributor contribution="Map Tester">Example3</contributor>
    </contributors>
    <!--
    ...
    ゲームモード設定やゲーム設定など
    ...
    -->
    </map>

